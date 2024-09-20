import { create } from "zustand";

const useBookStore = create((set) => ({
    books: [],
    addNewBook: (book) => set(state => ({ books: [...state.books, book] })),
    deleteBook: (id) => set(state => ({ books: state.books.filter(item => item.id !== id) })),
    updateBook: (id, UpdatedData) => set(state => ({
        books: state.books.map(book => (book.id === id ? { ...book, ...UpdatedData } : book))
    })),
    viewBook: (name) => set(state => {
        const book = state.books.find(item => item.name === name);
        return { viewedBook: book || null };
    }),

    viewedBook: null
}));

export default useBookStore;
