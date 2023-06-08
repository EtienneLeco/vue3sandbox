import type { App } from "vue";
import type { Plugin, PluginId } from "./types";

const pluginMap = new Map<string, Plugin>();

export async function setupPlugins(app: App<Element>) {
    setupPluginAPI();
    try {
        await loadPlugins();
    } catch (e) {
        console.log("Unable to load plugin");
    }

    app.provide('getPlugin', (pluginId: PluginId) => {
        console.log("get plugin", pluginId);
        if (! pluginMap.has(pluginId)) { return null; }

        return pluginMap.get(pluginId);
    });
}

async function loadPlugins() {
    await loadJSFile("/src/plugin-manifesto.js");
}

function setupPluginAPI() {
    window.pluginAPI = {
        registerPlugin(plugin: Plugin) {
            console.log("here in plugin", plugin);
            pluginMap.set(plugin.id, plugin);
        },
        dataServices: {
            getCompany() {
                return {
                    id: "",
                    name: "My wonderful company"
                };
            },
            getUser() {
                return {
                    id: "",
                    firstName: "John",
                    lastName: "Doe"
                };
            }
        }
    };
}

async function loadJSFile(src: string) {
    return new Promise<void>((resolve, reject) => {
        const element = document.createElement("script");

        element.setAttribute("src", src);
        element.setAttribute("type", "text/javascript");
        element.setAttribute("async", "false");

        document.body.appendChild(element);

        element.addEventListener("load", () => {
            resolve();
        });

        element.addEventListener("error", reject);
    });
}