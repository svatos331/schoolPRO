export interface IPaginationBar {
    count: number,
    current: number,
    func: (value: number) => void
}