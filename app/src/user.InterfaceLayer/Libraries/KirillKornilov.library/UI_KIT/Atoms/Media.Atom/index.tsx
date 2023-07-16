import { FC } from "react";

import "./styled/style.css";

interface IMedia{
    link: string,
    logo: string,
}

const Media:FC<IMedia> =({link,logo})=> {

    return(
        <div className="media">
            <a href={link}><img src={logo} alt={logo}/></a>
        </div>
    );
};

export default Media;
