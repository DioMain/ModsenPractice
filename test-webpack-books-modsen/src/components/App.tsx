import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { useAppSelector } from '../redux/hooks';
import CartPage from './CartPage';
import SearchPage from './SearchPage';
import BookSearchData from '../types/bookSearchData';

function App() {
  const currnetBook = useAppSelector(state => state.book.value);

  const [searchInfo, setSearchInfo] = useState<BookSearchData>({ search: "" });

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