import React from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
//
import "./styles.scss";
import { searchProducts } from "../../actions";

function SearchInput() {
  const dispatch = useDispatch();

  return (
    <DebounceInput
      type="text"
      minLength={1}
      className="search-input"
      debounceTimeout={800}
      onChange={({ target: { value } }) => dispatch(searchProducts(value))}
      placeholder="Do que você precisa hoje?"
    />
  );
}

export default SearchInput;
