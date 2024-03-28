
import { useEffect, useState } from "react"
import Book from "../Book/Book";

export default function Books() {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('Books.json')
        .then(res => res.json())
        .then(data =>setBooks(data))
        
    },[])   
  return (
    <div className="grid grid-cols-3 max-w-[90%] m-auto gap-10">
      {
        books.map(book => <Book key={book.bookId} book={book}></Book>)

      }    
    </div>
  )
}
