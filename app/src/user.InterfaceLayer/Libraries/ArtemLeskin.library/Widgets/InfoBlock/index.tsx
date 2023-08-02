import React, { memo } from "react";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import * as ST from "./style/style";
import { InfoBlockProps } from "./type/index";



const InfoBlock: React.FC<InfoBlockProps> = (props: InfoBlockProps) => {
    const { useGetOneMovieQuery, id } = props;

    const {data: info, isLoading} = useGetOneMovieQuery({id});
    
    const ganre = info?.genres?.map((item:any) => {return item?.genre;}).join(", ");
    const country = info?.countries?.map((item:any) => {return item?.country;}).join(", ");

    

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
                        <ST.TxtContainer>
                            <ST.Txt title={info.year}/>
                            <ST.Txt title={ganre}/>
                            <ST.Txt title={`${info.ageLimits.split("age")[1]}+`}/>
                            <ST.Txt title={country}/>
                            <ST.Txt title={info.filsLength + " мин"}/>
                        </ST.TxtContainer>
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

export default memo(InfoBlock);