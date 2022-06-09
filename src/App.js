import React, {useEffect, useState} from 'react';

import {getBooksAPI, addBookAPI, updateBookApi, deleteBookAPI} from "./apis/book"
import TableBook from "./components/TableBook";

function App() {
  const [books, setBook] = useState([])
  useEffect(()=>{
    getBooksAPI().then(books => setBook(books));
  }, [])

  const addBook = (book) =>{
    return addBookAPI(book)
        .then(data => {
          setBook([...book, data])
        })
  }

  const updateBook = (book) =>{
    return updateBookApi(book)
        .then(data=>{
          return data;
        })
  }

  const deleteBook =(id) =>{
    return deleteBookAPI(id)
        .then(data => {
          if(data.deleteCount === 1){
            setBook(books.filter(book => book._id !== id))
          }
        })
  }


  return ( <div className = "App" >
    {/*<CreateBook oncreate={addBook}/>*/}
      <TableBook books={books}/>
  </div>)
}

export default App;