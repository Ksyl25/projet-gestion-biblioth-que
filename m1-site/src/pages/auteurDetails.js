import React, { useState, useEffect } from 'react'; // Ajouté
import { useParams, useNavigate } from 'react-router-dom'; // Ajouté
import Modal from '../components/modal';
import Input from '../components/input';
import Button from '../components/button';
import List from '../components/list';
import { useLocation } from 'react-router-dom';



a
function AuthorDetail({ authors }) {
  const { id } = useParams(); // Hook pour obtenir les paramètres de l'URL
  const navigate = useNavigate(); // Hook pour naviguer programmatique
  const [author, setAuthor] = useState(null); // Hook pour gérer l'état local
  const [books, setBooks] = useState([]); // Gérer les livres de l'auteur

  useEffect(() => {
    if (Array.isArray(authors)) {
      const foundAuthor = authors.find((a) => a.id === parseInt(id, 10));
      if (!foundAuthor) {
        navigate('/auteur');
      } else {
        setAuthor(foundAuthor);
      }
    }
  }, [id, authors, navigate]);

  if (!author) return <p>Chargement...</p>;

   // Récupération des données passées via state
   const location = useLocation();
   const { book } = location.state || {}; // Vérification de la présence des données
 
   if (!book) {
     return <p>Erreur : Aucun détail trouvé pour ce livre.</p>;
   }

  return (
    <div>
      <h1>{author.name}</h1>
      <img src={author.photoUrl} alt={author.name} />
      <p>Nationalité : {author.nationalite}</p>
      <p>Nombre de livres écrits : {author.booksC}</p>
      <p>Moyenne des avis : {author.rating} ⭐️</p>

      <h2>Livres de {author.name}</h2>
      <List
        items={books}
        renderItem={(book) => (
          <div key={book.id} className="flex justify-between">
            <span>{book.title}</span>
            <Button onClick={() => setBooks(books.filter((b) => b.id !== book.id))}>
              Supprimer
            </Button>
          </div>
        )}
      />
      <Button onClick={() => setBooks([...books, { id: Date.now(), title: 'Nouveau Livre' }])}>
        Ajouter un livre
      </Button>
    </div>
  );
}

export default AuthorDetail;
