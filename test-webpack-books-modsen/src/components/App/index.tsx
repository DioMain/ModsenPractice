import React from 'react';

import useBooks from './../../api/hooks/useBooks';
import './../../styles/css/index.css'

function App() {
    let books = useBooks("CLR");                                                                   

    return (
        <>
            {
                books.map((value) => {
                    return (<div>{value.volumeInfo.title}</div>)
                })
            }
        </>
    )
}

export default App;