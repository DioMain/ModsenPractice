import React, { useCallback } from "react";

import '../styles/searchBar.scss';

let searchText = "";

const SearchBar: React.FC<{ onSearchSubmit: Function }> = ({ onSearchSubmit }) => {
  const submit = useCallback(() => {
    onSearchSubmit({ search: searchText });
  }, [onSearchSubmit]);

  return (
    <header>
      <input className="asul-bold" type="text" placeholder="book name" onChange={(evt) => { searchText = evt.target.value }}/>
    </header>
  );
}

export default SearchBar;