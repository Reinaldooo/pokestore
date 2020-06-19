import React from "react";
import { useSelector } from "react-redux";
//
import Drawer from "../../stateless/Drawer";
import CardProductHorizontal from "../../stateless/CardProductHorizontal";
import SearchInput from "../../statefull/SearchInput";
import { closeSearchDrawer } from "../../actions"

function Search() {
  const { shouldShowSearch, searchResult } = useSelector(
    (state) => state.products
  );

  return shouldShowSearch ? (
    <Drawer
      title="Pesquisa"
      closeFunction={closeSearchDrawer}
    >
      <SearchInput/>
      {
        searchResult && (
        searchResult.length > 0 ?
        searchResult.map((prod) => (
          <CardProductHorizontal
            product={prod}
            key={prod.id}
          />
        ))
        :
        <p className="drawer__empty">Ops, nenhum item encontrado! :/</p>
        )
      }
    </Drawer>
  ) : null;
}

export default Search;
