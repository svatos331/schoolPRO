export interface AdviceCardInterface {
    link: string, 
    text: string,
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export interface AdviceBarProps {
    useGetAllMovieQuery: any
}