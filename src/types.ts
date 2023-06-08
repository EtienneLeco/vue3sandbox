export type PluginId = Plugin["id"];

export type PluginRouterServices = {
    go: (url: string) => {};
    getRoute: () => any;
}

export type PluginDataServices = {
    getUser: () => any;
    getCompany: () => any;
}

export type PluginAPI = {
    registerPlugin: (plugin: Plugin) => void;
    dataServices: PluginDataServices;
    routerServices: PluginRouterServices;
}

export type PluginCustomArticleContext = {
    resourceName: string;
}

export type PluginCustomArticle = {
    id: "customArticle";
    render: (element: HTMLElement, context: PluginCustomArticleContext) => void;
}

export type PluginCustomImage = {
    id: "customImage";
    render: (element: HTMLElement, context: {}) => void;
}

export type Plugin = PluginCustomArticle | PluginCustomImage;