import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Fonction utilitaire pour convertir un titre en slug
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Retirer les caractères non alphanumériques
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .trim();

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    book_title: '',
    book_name: '',
    book_price: '',
    book_published_date: '',
    book_wrote_date: '',
  });

  // Charger les livres depuis l'API
  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des livres');
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error('Erreur de récupération des livres:', error));
  }, []);

  // Fonction pour ajouter un nouveau livre
  const handleAddBook = () => {
    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de l\'ajout du livre');
        }
        return response.json();
      })
      .then((createdBook) => {
        // Ajouter le nouveau livre à la liste existante
        setBooks((prevBooks) => [...prevBooks, createdBook]);
        setIsModalOpen(false); // Fermer le modal
        setNewBook({ book_title: '', book_name: '', book_price: '', book_published_date: '', book_wrote_date: '' }); // Réinitialiser le formulaire
      })
      .catch((error) => console.error('Erreur lors de l\'ajout du livre:', error));
  };

  // Filtrer les livres par titre
  const filteredBooks = books.filter((book) =>
    book.book_title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Liste des livres</h1>

      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher par titre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4"
      />

      {/* Bouton pour ajouter un livre */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded"
      >
        Ajouter un livre
      </button>

      {/* Liste des livres */}
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.book_title} className="mb-2">
            <h2 className="text-xl font-semibold">{book.book_title}</h2>
            <Link
              to={`/books/${slugify(book.book_title)}`}
              className="text-blue-500 underline"
            >
              Voir les détails
            </Link>
          </li>
        ))}
      </ul>

      {/* Modal pour ajouter un livre */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau livre</h2>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Titre :</label>
              <input
                type="text"
                value={newBook.book_title}
                onChange={(e) => setNewBook({ ...newBook, book_title: e.target.value })}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Auteur :</label>
              <input
                type="text"
                value={newBook.book_name}
                onChange={(e) => setNewBook({ ...newBook, book_name: e.target.value })}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Prix :</label>
              <input
                type="number"
                value={newBook.book_price}
                onChange={(e) => setNewBook({ ...newBook, book_price: e.target.value })}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Date de publication :</label>
              <input
                type="date"
                value={newBook.book_published_date}
                onChange={(e) => setNewBook({ ...newBook, book_published_date: e.target.value })}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Date de rédaction :</label>
              <input
                type="date"
                value={newBook.book_wrote_date}
                onChange={(e) => setNewBook({ ...newBook, book_wrote_date: e.target.value })}
                className="border p-2 w-full"
              />
            </div>
            <button
              onClick={handleAddBook}
              className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            >
              Enregistrer
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 mt-4 ml-4 rounded"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
