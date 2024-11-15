import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/breadcrumbs';
import Button from '../components/button';
import List from '../components/list';
import AuthorItem from '../components/AuthorItem'; // Importation du nouveau composant
import AddAuthorModal from '../components/AddAuthorModal'; // Importation du modal
import SearchInput from '../components/SearchInput'; // Importation du composant de recherche

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState({
    author_name: '',
    photo_url: '',
    biography: '',
  });
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/authors')
      .then((response) => response.json())
      .then((data) => setAuthors(data))
      .catch((error) => console.error('Erreur de récupération des auteurs:', error));

    fetch('http://localhost:3001/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Erreur de récupération des livres:', error));
  }, []);

  const handleAddAuthor = () => {
    fetch('http://localhost:3001/authors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAuthor),
    })
      .then((response) => response.json())
      .then((createdAuthor) => {
        setAuthors((prevAuthors) => [...prevAuthors, createdAuthor]);
        setIsModalOpen(false);
        setNewAuthor({ author_name: '', photo_url: '', biography: '' });
      })
      .catch((error) => console.error('Erreur lors de l\'ajout de l\'auteur:', error));
  };

  const filteredAuthors = authors.filter((author) =>
    author.author_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Breadcrumb />
      <h1 className="text-3xl font-bold my-4">Liste des auteurs</h1>

      <SearchInput search={search} setSearch={setSearch} /> {/* Composant de recherche */}

      <Button onClick={() => setIsModalOpen(true)}>Ajouter un auteur</Button>

      <List
        items={filteredAuthors}
        renderItem={(author) => (
          <AuthorItem key={author.author_id} author={author} books={books} /> // Affichage des livres sous chaque auteur
        )}
      />

      <AddAuthorModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        newAuthor={newAuthor}
        setNewAuthor={setNewAuthor}
        handleAddAuthor={handleAddAuthor}
      />
    </div>
  );
}

export default Authors;
