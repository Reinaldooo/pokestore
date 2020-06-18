import React from "react";
import { useSelector } from "react-redux";
//
import Drawer from "../../stateless/Drawer";
import SearchInput from "../../statefull/SearchInput";
import { closeSearchDrawer } from "../../actions"

function Search() {
  const { shouldShowSearch, searchResult } = useSelector((state) => state.products);

  return shouldShowSearch ? (
    <Drawer
      title="Pesquisa"
      closeFunction={closeSearchDrawer}
    >
      <SearchInput/>
      {
        searchResult && (
        searchResult.length > 0 ?
        searchResult.map((prod) => "ha") :
        <p>Ops</p>
        )
      }
    </Drawer>
  ) : null;
}

export default Search;
