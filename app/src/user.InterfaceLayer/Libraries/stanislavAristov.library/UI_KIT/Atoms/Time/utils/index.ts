export const useCurrentDate = (date :Date):{curDate:string} => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return {curDate:`${hours}:${minutes}`};
};
export class CurDataTimeObject {
    private static dateTime?:string;
    public static getDateTime = () => {
        const {curDate} = useCurrentDate(new Date())??"00:00";
        this.dateTime = curDate ?? "00:00";
        // eslint-disable-next-line no-console
        console.log(curDate);

        return curDate;
    };
    public static toString = () => {
        return CurDataTimeObject.dateTime;
    };

}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
