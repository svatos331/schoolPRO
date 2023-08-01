import React, { memo } from "react";

import * as ST from "./style/style";
import { RatingProps } from "./type/index";

const RatingComponent: React.FC<RatingProps> = ({rating, classname}: RatingProps) => {
  return (
    <ST.Rating rat={rating} className={classname}>
        {rating}
    </ST.Rating>
  );
};

export default memo(RatingComponent);;