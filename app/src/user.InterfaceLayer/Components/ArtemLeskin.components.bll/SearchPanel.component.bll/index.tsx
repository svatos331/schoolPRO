import React from "react";
import { SearchPanel } from "user.InterfaceLayer/Libraries/ArtemLeskin.library/Widgets/SearchPanel";

interface SearchPanelBllProps{
  chOrder: (value: string) => void,
  chYear: (value: string) => void,
  chGanre: (value: string) => void,
  chRating: (value: string) => void,
}

const SearchPanelBll: React.FC<SearchPanelBllProps> = (props: SearchPanelBllProps) => {
  const {chGanre, chRating, chOrder, chYear} = props;

  return (
      <SearchPanel
        chGanre={chGanre}
        chRating={chRating}
        chOrder={chOrder}
        chYear={chYear}
      />
  );
};

export default SearchPanelBll;