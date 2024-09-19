import React, { useState } from 'react';
import useBookStore from '../store/store';

const AddBook = () => {
    const { addNewBook } = useBookStore();

    const [bName, setBName] = useState('');
    const [aName, setAName] = useState('');
    const [date, setDate] = useState('');

    const handleBooks = (e) => {
        e.preventDefault();

        const newBook = {
            id: Date.now(),
            title: bName,
            author: aName,
            issueDate: date
        };

        addNewBook(newBook);

        setBName('');
        setAName('');
        setDate('');
    };

    return (
        <>
            <form onSubmit={handleBooks}>
                <input
                    type="text"
                    placeholder="Book name"
                    name="bname"
                    value={bName}
                    onChange={(e) => setBName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author Name"
                    name="aname"
                    value={aName}
                    onChange={(e) => setAName(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Issue Date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default AddBook;