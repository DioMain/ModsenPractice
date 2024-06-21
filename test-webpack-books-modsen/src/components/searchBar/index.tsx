import React, { useCallback } from "react";

let searchText = "";

const SearchBar: React.FC<{ onSearchSubmit: Function }> = ({ onSearchSubmit }) => {
  const submit = useCallback(() => {
    onSearchSubmit({ search: searchText });
  }, [onSearchSubmit]);

  return (
    <header>
      <input type="text" placeholder="book name" onChange={(evt) => { searchText = evt.target.value }}/>
      <input type="button" value="search" onClick={submit}/>
    </header>
  );
}

export default SearchBar;