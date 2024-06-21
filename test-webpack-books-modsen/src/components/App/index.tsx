import React, { useState } from 'react';
import SearchBar from '../searchBar';
import { useAppSelector } from '../../redux/hooks';
import CartPage from '../cartPage';
import SearchPage from '../searchPage';
import SearchData from '../../types/searchData';

function App() {
  const currnetBook = useAppSelector(state => state.book.value);

  const [searchInfo, setSearchInfo] = useState<SearchData>({ search: "" });

  return (
    <>
      <SearchBar onSearchSubmit={setSearchInfo}/>

      {
        currnetBook != undefined ? <CartPage book={currnetBook}/> : <SearchPage searchInfo={searchInfo}/>
      }
    </>
  )
}

export default App;