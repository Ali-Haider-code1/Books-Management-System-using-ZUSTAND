import React, { useState } from 'react';
import useBookStore from '../store/store';

export default function UpdateBook() {
    const { updateBook, books } = useBookStore();
    const [bookId, setBookId] = useState('');
    const [updatedData, setUpdatedData] = useState({
        title: '',
        author: '',
        issueDate: ''
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!bookId) {
            alert("Please select a book to update");
            return;
        }
        updateBook(bookId, updatedData);
        setUpdatedData({ title: '', author: '', issueDate: '' });
        setBookId('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <form onSubmit={handleUpdate}>
                <label htmlFor="bookId">Select Book to Update:</label>
                <select
                    id="bookId"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    required
                >
                    <option value="">--Select a Book--</option>
                    {books.map((book) => (
                        <option key={book.id} value={book.id}>
                            {book.title}
                        </option>
                    ))}
                </select>

                <label htmlFor="title">New Book Name:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={updatedData.title}
                    onChange={handleChange}
                    placeholder="New Book Name"
                />

                <label htmlFor="author">New Author Name:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={updatedData.author}
                    onChange={handleChange}
                    placeholder="New Author Name"
                />

                <label htmlFor="issueDate">New Issue Date:</label>
                <input
                    type="date"
                    id="issueDate"
                    name="issueDate"
                    value={updatedData.issueDate}
                    onChange={handleChange}
                    placeholder="New Issue Date"
                />

                <button type="submit">Update Book</button>
            </form>
        </>
    );
}
