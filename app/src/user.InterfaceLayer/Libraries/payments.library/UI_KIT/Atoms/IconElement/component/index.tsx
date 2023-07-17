import React, {FC} from "react";

import IIconElementProps from "../type";
import IconElementDefProps from "../const";

const IconElement: FC<IIconElementProps> = ({style,src, width, height, customClass}) => {
    return <img style={style} src={src} alt="icon" width={width} height={height} className={customClass}/>;
};
IconElement.defaultProps = IconElementDefProps;
export default IconElement;