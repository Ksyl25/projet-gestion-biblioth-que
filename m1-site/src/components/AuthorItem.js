import React from 'react';

const AuthorItem = ({ author, books }) => {
    const getBooksByAuthor = (authorName) => {
        return books.filter((book) => book.book_name === authorName);
    };

    const booksByAuthor = getBooksByAuthor(author.author_name);

    return (
        <div key={author.author_id} className="bg-white p-4 mb-4 shadow rounded">
            <h2 className="text-xl font-semibold">{author.author_name}</h2>
            <p>{author.biography}</p>

            {booksByAuthor.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Livres de cet auteur :</h3>
                    <ul>
                        {booksByAuthor.map((book) => (
                            <li key={book.book_id} className="mb-2">
                                <p><strong>{book.book_title}</strong></p>
                                <p>Date de publication : {book.book_published_date}</p>
                                <p>Prix : {book.book_price}€</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AuthorItem;
