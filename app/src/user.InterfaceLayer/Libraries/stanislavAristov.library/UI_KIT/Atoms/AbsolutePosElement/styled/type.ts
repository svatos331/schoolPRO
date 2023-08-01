export type IStyledAbsolutePostElement = {
    [EDirection.left]?:string,
    [EDirection.right]?:string,
    [EDirection.top]?:string,
    [EDirection.bottom]?:string,
    position?:"absolute"|"fixed"
};
export enum EDirection  {
    ["left"]="left",
    ["right"]="right",
    ["top"]="top",
    ["bottom"]="bottom"
}