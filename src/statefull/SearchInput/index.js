import React from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
//
import "./styles.scss";
import { setSearchingProducts } from "../../actions";

function SearchInput() {
  const dispatch = useDispatch();

  return (
    <DebounceInput
      type="text"
      minLength={1}
      className="search-input"
      debounceTimeout={800}
      onChange={({ target: { value } }) => dispatch(setSearchingProducts(value))}
      placeholder="Qual carta você procura?"
    />
  );
}

export default SearchInput;
