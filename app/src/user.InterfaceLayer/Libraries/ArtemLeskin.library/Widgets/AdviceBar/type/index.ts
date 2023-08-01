export interface AdviceCardInterface {
    value: string, 
    text: string,
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export interface AdviceBarProps {
    useGetAllMovieQuery: any
    changeGanre: (value: string) => void
}