import React, { useState } from 'react'
import useBookStore from '../store/store'


const ReadBook = () => {
    const books = useBookStore((state) => state.books);
    return (
        <div>
            <h2>All Books</h2>
            {books.length > 0 ? (
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            {book.title}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books available.</p>
            )}
        </div>
    )
}
export default ReadBook;
