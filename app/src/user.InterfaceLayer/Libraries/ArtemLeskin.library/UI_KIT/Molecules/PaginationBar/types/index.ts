export interface IPaginationBar {
    count: number,
    current: number,
    className?: string,
    func: (value: number) => void
}