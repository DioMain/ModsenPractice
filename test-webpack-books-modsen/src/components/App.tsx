import React, { useState } from 'react';
import SearchBar from './searchBar';
import { useAppSelector } from '../redux/hooks';
import CartPage from './cartPage';
import SearchPage from './searchPage';
import GoogleBooksApiOptions from '../types/googleBooksApiOptions';

function App() {
  const currnetBook = useAppSelector(state => state.book.value);

  return (
    <>
      <SearchBar/>

      {
        currnetBook != undefined ? <CartPage book={currnetBook}/> : <SearchPage/>
      }
    </>
  )
}

export default App;