interface MediaBase {
    title: string;
    src: string;
    description?: string;
    enableBackgroundBlur?: boolean
}

export interface MediaImage extends MediaBase {
    type: "image";
    alt?: string;
}

export interface MediaVideo extends MediaBase {
    type: "video";
    poster: string;
}

export interface MediaIframe {
    title: string;
    src: string;
    description?: string;
    height?: number;
}

export interface GameIframe {
    title: string;
    src: string;
    paragraphs?: string[];
    size?: string;
}

export interface Link {
    title: string;
    href: string;
}

export interface Data {
    title: string;
    posts: Post[];
}

export interface Post {
    id: string;
    title: string;
    underConstruction?: boolean;
    summary: string;
    paragraphs: string[];
    stack: Stack[];
    links?: Link[];
    gallery?: (MediaImage | MediaVideo)[];
    youtubeVideos?: MediaIframe[];
    iframes?: MediaIframe[];
    games?: GameIframe[];
}

export enum Stack {
    PostgreSQL = "PostgreSQL",
    Tile38 = "Tile38",
    NodeJS = "Node.js",
    CSS = "CSS",
    HTML = "HTML",
    TypeScript = "TypeScript",
    GraphQL = "GraphQL",
    Protobuf = "Protobuf",
    OpenAPI = "OpenAPI",
    MongoDB = "MongoDB",
    Go = "Go",
    Svelte = "Svelte",
    React = "React.js",
    ReactNative = "React Native",
    MUI = "Material-UI",
    Vite = "Vite",
    SAPBW = "SAP BW",
    OData = "oData",
    D3 = "D3.js",
    MapLibre = "MapLibre",
    DaVinci = "DaVinci Resolve",
    Flutter = "Flutter",
    Dart = "Dart",
    Blender = "Blender",
    Unity = "Unity",
    RxJS = "RxJS"
}