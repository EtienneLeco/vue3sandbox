export type PluginId = 'customArticle' | 'customImage';

export type PluginRouterAPI = {
    go: (url: string) => {};
    getRoute: () => any;
}

export type PluginDataAPI = {
    getUser: () => any;
    getCompany: () => any;
}

export type PluginGlobalContext = {
    backendAPI: any;
    routerAPI: PluginRouterAPI;
    dataAPI: PluginDataAPI;
}

export type Plugin<T = any> = {
    id: PluginId;
    render: (element: HTMLElement, context: T) => void;
}