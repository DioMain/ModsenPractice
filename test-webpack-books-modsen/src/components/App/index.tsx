import React from 'react';
import SearchBar from '../searchBar';
import { useAppSelector } from '../../redux/hooks';

function App() {
  const book = useAppSelector(state => state.book.value);

  return (
    <>
      <SearchBar/>

      {
        book != undefined ? <div>HAVE</div> : <div>HAVEN`T</div>
      }
    </>
  )
}

export default App;