import { useGetSimilarsMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import React, { memo } from "react";
import CardBar from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardBar";

interface ISimilarPanel {
    id: string
}

const SimilarPanel: React.FC<ISimilarPanel> = ({id}: ISimilarPanel) => {
  return (
    <CardBar  
        headerTitle="Похожие" 
        parament={id} 
        useGetMovie={useGetSimilarsMovieQuery}
    />
  );
};

export default memo(SimilarPanel);