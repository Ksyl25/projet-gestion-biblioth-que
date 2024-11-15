import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../service/booksService';

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const data = await fetchBooks();
                setBooks(data);
            } catch (err) {
                setError('Erreur lors du chargement des livres');
            } finally {
                setLoading(false);
            }
        };

        loadBooks();
    }, []);

    if (loading) return <p>Chargement des livres...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Liste des livres</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.book_title} {console.log(book)}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksPage;
