import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Fonction utilitaire pour générer un slug
const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();

function BookDetails() {
    const { slug } = useParams(); // Récupérer le slug depuis l'URL
    const [book, setBook] = useState(null);

    // Charger les livres et trouver celui correspondant au slug
    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des livres");
                }
                return response.json();
            })
            .then((data) => {
                // Trouver le livre correspondant au slug
                const matchedBook = data.find((b) => slugify(b.book_title) === slug);
                setBook(matchedBook);
            })
            .catch((error) => console.error('Erreur de récupération des livres:', error));
    }, [slug]);

    if (!book) {
        return <p>Chargement des détails du livre...</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold my-4">{book.book_title}</h1>
            <p><strong>Auteur :</strong> {book.book_name}</p>
            <p><strong>Prix :</strong> {book.book_price} €</p>
            <p><strong>Date de publication :</strong> {book.book_published_date}</p>
            <p><strong>Date de rédaction :</strong> {book.book_wrote_date}</p>

            {/* Lien pour revenir à la liste des livres */}
            <Link to="/book" className="text-blue-500 underline">
                Retour à la liste des livres
            </Link>
        </div>
    );
}

export default BookDetails;
