CREATE TABLE authors (
    author_id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_name TEXT NOT NULL,
    photo_url TEXT,
    biography TEXT
);

CREATE TABLE books (
    book_id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_name TEXT NOT NULL,
    book_wrote_date TEXT NOT NULL,
    book_title TEXT NOT NULL,
    book_price REAL NOT NULL,
    book_published_date TEXT NOT NULL,
    book_author_id INTEGER NOT NULL,
    FOREIGN KEY (book_author_id) REFERENCES authors(author_id)
);

CREATE TABLE book_reviews (
    book_review_id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER NOT NULL,
    review_text TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    review_date TEXT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);
