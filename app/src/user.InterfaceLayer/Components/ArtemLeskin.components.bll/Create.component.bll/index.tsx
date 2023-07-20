import { usePostAuthorMovieQuery } from "business.InterfaceLayer/store/shared/entities/artemLeskin.entities/movie.entity/redux/api";
import React from "react";
import { CreacteBlock } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CreateBlock";

const Create = () => {
  return (
    <CreacteBlock func={usePostAuthorMovieQuery}/>
  );
};

export default Create;