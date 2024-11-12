

import React, { useState } from 'react';
import Breadcrumb from '../components/breadcrumbs';
import Button from '../components/button';
import Modal from '../components/modal';
import Input from '../components/input';
import List from '../components/list';

function Authors() {
  // Liste des auteurs avec des données supplémentaires : photo, nombre de livres, moyenne pondérée des avis
  const [authors, setAuthors] = useState([
    { 
      id: 1, 
      name: 'Auteur Exemple 1', 
      bDtae: '1980-01-01', 
      nationalite: 'Française',
      photoUrl: 'https://via.placeholder.com/150', // URL de la photo
      booksC: 3, // Nombre de livres écrits
      rating: 4.2, // Moyenne pondérée des avis
    },
    { 
      id: 2, 
      name: 'Auteur Exemple 2', 
      bDtae: '1975-05-12', 
      nationalite: 'Anglaise',
      photoUrl: 'https://via.placeholder.com/150', // URL de la photo
      booksC: 5, // Nombre de livres écrits
      rating: 4.5, // Moyenne pondérée des avis
    },
  ]);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState({ name: '', bDate: '', nationalite: '', photoUrl: '', booksC: 0, rating: 0 });

  // Filtrer les auteurs par nom
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(search.toLowerCase())
  );

  // Fonction pour ajouter un auteur
  const handleAddAuthor = () => {
    const id = authors.length ? authors[authors.length - 1].id + 1 : 1;
    const authorWithId = { ...newAuthor, id };
    setAuthors([...authors, authorWithId]);
    setIsModalOpen(false);
    setNewAuthor({ name: '', bDate: '', nationalite: '', photoUrl: '', booksC: 0, rating: 0 });
  };

  return (
    <div>
      {/* Affichage du breadcrumb personnalisé */}
      <Breadcrumb />
      {/* Titre principal de la page */}
      <h1 className="text-3xl font-bold my-4">Liste des auteurs</h1>

      {/* Champ de recherche pour filtrer les auteurs par nom */}
      <Input
        label="Rechercher par nom"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Bouton pour ouvrir le modal d'ajout d'auteur */}
      <Button onClick={() => setIsModalOpen(true)}>Ajouter un auteur</Button>

      {/* Liste des auteurs filtrés affichés dynamiquement */}
      <List
        items={filteredAuthors}
        renderItem={(author) => (
          <div key={author.id} className="bg-white p-4 mb-4 shadow rounded flex space-x-4">
            {/* Affichage de la photo de l'auteur */}
            <img src={author.photoUrl} alt={author.name} className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{author.name}</h2>
              <p>Date de naissance : {author.bDate}</p>
              <p>Nationalité : {author.nationalite}</p>
              <p>Nombre de livres écrits : {author.booksC}</p>
              <p>Moyenne des avis : {author.rating} ⭐️</p>
            </div>
          </div>
        )}
      />

      {/* Modal pour ajouter un nouvel auteur */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl mb-4">Ajouter un nouvel auteur</h2>
        <Input
          label="Nom"
          value={newAuthor.name}
          onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })}
        />
        <Input
          label="Date de naissance"
          value={newAuthor.bDate}
          onChange={(e) => setNewAuthor({ ...newAuthor, bDate: e.target.value })}
        />
        <Input
          label="Nationalité"
          value={newAuthor.nationalite}
          onChange={(e) => setNewAuthor({ ...newAuthor, nationalite: e.target.value })}
        />
        <Input
          label="URL de la photo"
          value={newAuthor.photoUrl}
          onChange={(e) => setNewAuthor({ ...newAuthor, photoUrl: e.target.value })}
        />
        <Input
          label="Nombre de livres écrits"
          type="number"
          value={newAuthor.booksCount}
          onChange={(e) => setNewAuthor({ ...newAuthor, booksCount: parseInt(e.target.value, 10) })}
        />
        <Input
          label="Moyenne des avis"
          type="number"
          step="0.1"
          value={newAuthor.rating}
          onChange={(e) => setNewAuthor({ ...newAuthor, rating: parseFloat(e.target.value) })}
        />
        <Button onClick={handleAddAuthor}>Enregistrer</Button>
      </Modal>
    </div>
  );
}

export default Authors;
