import React, { useState } from 'react'
import useBookStore from '../store/store'

export default function DeletBook() {
    const { deleteBook } = useBookStore();
    const [bName, setBName] = useState('');
    const handleDelete = (e) => {
        e.preventDefault();
        deleteBook(bName);
        setBName('')

    }
    return (
        <>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="Book name"
                    name="bname"
                    value={bName}
                    onChange={(e) => setBName(e.target.value)}
                    required
                />
                <button type="submit">Delete</button>
            </form>
        </>
    )
}
