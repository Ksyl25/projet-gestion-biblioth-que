// src/pages/Books/Books.js

import React, { useState } from 'react';
import Breadcrumb from '../components/breadcrumbs';
import Button from '../components/button';
import Modal from '../components/modal';
import Input from '../components/input';
import List from '../components/list';

function Books() {
  // State pour stocker la liste des livres
  const [books, setBooks] = useState([
    // Données de test pour les livres, à remplacer plus tard par des données de base de données
    { id: 1, title: 'Livre Exemple 1', author: 'Auteur 1', date: '2022', rating: 4 },
    { id: 2, title: 'Livre Exemple 2', author: 'Auteur 2', date: '2021', rating: 5 },
  ]);

  // State pour le terme de recherche de livre par titre
  const [search, setSearch] = useState('');
  // State pour gérer l'ouverture et la fermeture du modal d'ajout de livre
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State pour les données du nouveau livre à ajouter
  const [newBook, setNewBook] = useState({ title: '', author: '', date: '' });

  // Filtrer les livres en fonction du titre recherché
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  // Fonction pour ajouter un nouveau livre à la liste
  const handleAddBook = () => {
    // Générer un nouvel id pour le livre en fonction de la longueur de la liste actuelle
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    // Ajouter une note initiale de 0 pour chaque nouveau livre
    const bookWithId = { ...newBook, id, rating: 0 };
    // Mettre à jour la liste des livres en ajoutant le nouveau livre
    setBooks([...books, bookWithId]);
    // Fermer le modal et réinitialiser le formulaire
    setIsModalOpen(false);
    setNewBook({ title: '', author: '', date: '' });
  };

  return (
    <div>
      {/* Affichage du breadcrumb personnalisé */}
      <Breadcrumb />
      {/* Titre principal de la page */}
      <h1 className="text-3xl font-bold my-4">Liste des livres</h1>

      {/* Champ de recherche pour filtrer les livres par titre */}
      <Input
        label="Rechercher par titre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Bouton pour ouvrir le modal d'ajout de livre */}
      <Button onClick={() => setIsModalOpen(true)}>Ajouter un livre</Button>

      {/* Liste des livres filtrés affichés dynamiquement */}
      <List
        items={filteredBooks}
        renderItem={(book) => (
          <div key={book.id}>
            <h2 className="text-xl">{book.title}</h2>
            <p>Auteur : {book.author}</p>
            <p>Date : {book.date}</p>
            <p>Note moyenne : {book.rating} ⭐️</p>
          </div>
        )}
      />

      {/* Modal pour ajouter un nouveau livre */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl mb-4">Ajouter un nouveau livre</h2>
        {/* Champs pour entrer le titre, l'auteur et la date du nouveau livre */}
        <Input
          label="Titre"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <Input
          label="Auteur"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <Input
          label="Date de publication"
          value={newBook.date}
          onChange={(e) => setNewBook({ ...newBook, date: e.target.value })}
        />
        {/* Bouton pour enregistrer le nouveau livre dans la liste */}
        <Button onClick={handleAddBook}>Enregistrer</Button>
      </Modal>
    </div>
  );
}

export default Books;
