import React from "react";
import Text, { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";

import * as ST from "./style/style";
import { InfoBlockProps } from "./type/index";



export const InfoBlock: React.FC<InfoBlockProps> = (props: InfoBlockProps) => {
    const { useGetOneMovieQuery, id } = props;

    const {data: info, isLoading} = useGetOneMovieQuery({id});
    
    const ganre = info?.genres.map((item:any) => {return item?.genre;}).join(", ");
    const country = info?.countries.map((item:any) => {return item?.country;}).join(", ");

    

    return (
        <ST.Block style={{backgroundImage: `url(${info?.poster})`}}>
            {isLoading?
                <Text title="Loading..." size={TextSize.XL}/>
                :
                <ST.Shadow>
                <ST.Info>
                    {info.logoUrl && <ST.Img src={info.logoUrl} alt={info.name} />}
                    <ST.HeaderInfo>
                        <ST.Rating rating={info.rating}/>
                        <ST.Txt>{info.year}</ST.Txt>
                        <ST.TxtArr>{ganre}</ST.TxtArr>
                        <ST.Txt>{`${info.ageLimits.split("age")[1]}+`}</ST.Txt>
                        <ST.TxtArr>{country}</ST.TxtArr>
                        <ST.Txt>{info.filsLength + " мин"}</ST.Txt>
                    </ST.HeaderInfo>
                    <ST.Description>
                        {info.description}
                    </ST.Description>
                    </ST.Info>
                </ST.Shadow>
            }
        </ST.Block>
    );
};