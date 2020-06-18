import React from "react";
import { useSelector, useDispatch } from "react-redux";
//
import Drawer from "../../stateless/Drawer";
import SearchInput from "../../statefull/SearchInput";
import { closeSearchDrawer } from "../../actions"

function Search() {
  const dispatch = useDispatch();
  const { shouldShow } = useSelector((state) => state.search);

  return shouldShow ? (
    <Drawer
      title="Pesquisa"
      closeFunction={closeSearchDrawer}
    >
      <SearchInput/>
    </Drawer>
  ) : null;
}

export default Search;
