export interface SrcPanel {
    chOrder: (value: string) => void,
    chYear: (value: string) => void,
    chGanre: (value: string) => void,
    chRating: (value: string) => void,
}

export interface SrcModule {
    chYear: (value: string) => void,
    chGanre: (value: string) => void,
    chRating: (value: string) => void,
}

export interface SortModuleProps {
    chOrder: (value: string) => void,
}

