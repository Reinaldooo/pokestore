import React from "react";
import { DebounceInput } from "react-debounce-input";
//
import "./styles.scss"
import { searchProducts } from "../../actions"

function SearchInput() {
  return (
    <>
    <DebounceInput
      type="text"
      minLength={1}
      className="search-input"
      debounceTimeout={800}
      onChange={({ target: { value } }) => searchProducts(value)}
      placeholder="O que você procura hoje?"
    />
  </>
  );
}

export default SearchInput;
