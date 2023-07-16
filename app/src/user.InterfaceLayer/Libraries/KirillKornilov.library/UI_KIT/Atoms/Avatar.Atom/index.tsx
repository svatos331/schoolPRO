import { FC } from "react";

import "./styled/style.css";

interface IAvatar {
    img: string,
    diameter: number
}

const Avatar: FC<IAvatar> = ({img, diameter}) => {

    return (
        <img className='avatar' src={img} style={{height: diameter, width: diameter}} />
    );
};

export default Avatar;