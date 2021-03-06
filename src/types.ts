export interface Meta {
    api_version: string;
    query: {
        representation: string;
    };
    data_returned: number;
    data_available: number;
    more_data_available: boolean;
    implementation?: {
        maintainer: {
            email: string;
        };
        name: string;
        source_url: string;
        version: string;
    };
    provider?: {
        name: string;
        description: string;
        prefix: string;
    };
}

export interface Links {
    base_url: string;
    first?: {
        href: string;
    };
    next?: {
        href: string;
    };
}

export interface ApiVer {
    url?: string;
    version?: string;
    [key: string]: string;
}

export interface Api {
    type: string;
    id: string;
    attributes: {
        api_version: string;
        available_api_versions: ApiVer | ApiVer[];
        available_endpoints: string[];
        entry_types_by_format: {};
        formats: string[];
    };
}

export interface Provider {
    type: string;
    id: string;
    attributes: {
        name: string;
        description: string;
        base_url: string | null;
        homepage?: string | null;
        link_type?: string;
    };
}

export interface Structure {
    type: string;
    id: string;
    attributes: {
        chemical_formula_hill?: string;
        chemical_formula_reduced?: string;
        _tcod_unreduced_formula?: string;
        chemical_formula_descriptive?: string;
        [key: string]: any;
    };
}

export interface ProvidersResponse {
    data: Provider[];
    meta?: Meta;
}

export interface InfoResponse {
    data: Api | Api[];
    links?: Links;
    meta?: Meta;

    [key: string]: any;
}

export interface StructuresResponse {
    data: Structure[];
    links?: Links;
    meta?: Meta;
}

export interface LinksResponse {
    data: Structure[];
    links?: Links;
    meta?: Meta;
}

export interface ResponseError extends Error {
    response?: any;
}

export type ProvidersMap = { [key: string]: Provider }
export type ApisMap = { [key: string]: Api[] }
