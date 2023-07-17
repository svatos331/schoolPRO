// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {FC} from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import IIconElementProps from "../type";
import IconElementDefProps from "../const";

const IconElement: FC<IIconElementProps> = ({style,src, width, height, customClass}) => {
    return <img style={style} src={src} alt="icon" width={width} height={height} className={customClass}/>;
};
IconElement.defaultProps = IconElementDefProps;
export default IconElement;