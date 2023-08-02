import React from "react";
import Text from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text";
import Card from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Molecules/Card.molecule";
import { listInterface } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/CardList/module/List/type";
import { TextSize } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/UI_KIT/Atoms/Text/type";

import * as ST from "../../style/style";

const List: React.FC<listInterface> = ({isLoading, data, func, page}: listInterface) => {
  return (
    <>
        <ST.List> 
            {isLoading && 
                <ST.Load style={{height: "90vh"}}>
                    <Text title="Loading..." size={TextSize.XL}/>
                </ST.Load>
            }
            {data?.items?.map((item: any, index: number) => 
                <Card
                    card={item} 
                    key={index}
                />
            )}
        </ST.List>
        <ST.Pagination count={data?.totalPages} func={func} current={page}/>
    </>
  );
};

export default List;