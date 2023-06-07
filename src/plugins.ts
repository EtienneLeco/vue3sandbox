import { App, h, render } from "vue";
import type { Plugin, PluginGlobalContext, PluginId } from "./types";

export function setupPlugins(app: App<Element>) {
    const plugins = loadPlugins(buildGlobalContext());
    const pluginMap = getPluginMap(plugins);

    app.provide('getPlugin', (pluginId: PluginId) => {
        if (! pluginMap.has(pluginId)) { return null; }

        return pluginMap.get(pluginId);
    });
}

function loadPlugins(globalContext: PluginGlobalContext): Plugin[] {
    // load plugin
    return [{
        id: "customArticle",
        render(element: HTMLElement, context: any) {
            const pluginVNode = h("div", {
                class: "plugin-class",
                innerHTML: `<h1>Hello ${globalContext.dataAPI.getUser().firstName}</h1>
                <p>You are reading ${context.resourceName} from a plugin</p>
                <button type="button" onclick="document.getElementById('modal').showModal()">Click to open a popup</button>
                <dialog id="modal">
                    <p>Can you close me ?</p>
                    <form method="dialog">
                        <button>Yes I can</button>
                    </form>
                </dialog>`
            });
            render(pluginVNode, element);
        }
    }];
}

function getPluginMap(plugins: Plugin[]): Map<string, Plugin> {
    return new Map<string, Plugin>(plugins.map((item: Plugin) => [item.id, item]));
}

function buildGlobalContext() {
    return {
        dataAPI: {
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
    } as PluginGlobalContext;
}