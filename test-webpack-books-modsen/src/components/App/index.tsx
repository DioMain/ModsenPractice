import React from 'react';

import useBooks from './../../api/hooks/useBooks';

function App() {
    let books = useBooks("CLR");                                                                   

    return (
        <>
            {
                books != undefined ?
                (
                    books.map((value) => {
                        return (<div>{value.volumeInfo.title}</div>)
                    })
                )
                :
                (
                    <div>loading...</div>
                )
            }
        </>
    )
}

export default App;