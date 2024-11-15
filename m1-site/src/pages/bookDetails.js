import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumbs';
import Button from '../components/button';
import Modal from '../components/modal';
import Drawer from '../components/drawer'; // Si vous utilisez un composant Drawer de Material UI
import List from '../components/list';
import Input from '../components/input';

function BookDetails({ books, setBooks }) {
  const { id } = useParams(); // Récupère l'ID du livre à partir de l'URL
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id, 10)); // Trouve le livre en fonction de l'ID
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Gestion de la modale de suppression
  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false); // Gestion du drawer d'avis
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' }); // Gestion des avis
  const [reviews, setReviews] = useState([]); // Liste des avis pour ce livre

  if (!book) {
    return <p>Le livre demandé n'existe pas.</p>;
  }

  // Supprimer le livre
  const handleDeleteBook = () => {
    setBooks(books.filter((b) => b.id !== book.id));
    navigate('/books'); // Redirection vers la liste des livres
  };

  // Ajouter un avis
  const handleAddReview = () => {
    const newReviewWithId = {
      id: reviews.length ? reviews[reviews.length - 1].id + 1 : 1,
      ...newReview,
      date: new Date().toISOString(),
    };
    setReviews([...reviews, newReviewWithId]);
    setNewReview({ rating: 0, comment: '' });
  };

  // Trier les avis par date
  const sortedReviews = [...reviews].sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1
  );

  return (
    <div>
      <Breadcrumb />
      <h1 className="text-3xl font-bold my-4">{book.title}</h1>
      <p>Auteur : <strong>{book.author}</strong></p>
      <p>Date de publication : <strong>{book.date}</strong></p>
      <p>Note moyenne : {book.rating} ⭐️</p>
      <div className="flex gap-4 my-4">
        <Button onClick={() => setIsDeleteModalOpen(true)}>Supprimer ce livre</Button>
        <Button onClick={() => setIsReviewDrawerOpen(true)}>Voir les avis</Button>
      </div>

      {/* Modale de confirmation de suppression */}
      <Modal open={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <h2>Confirmation de suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer ce livre ? Cette action est irréversible.</p>
        <div className="flex gap-4 mt-4">
          <Button onClick={handleDeleteBook}>Confirmer</Button>
          <Button onClick={() => setIsDeleteModalOpen(false)}>Annuler</Button>
        </div>
      </Modal>

      {/* Drawer pour les avis */}
      <Drawer open={isReviewDrawerOpen} onClose={() => setIsReviewDrawerOpen(false)}>
        <h2 className="text-2xl mb-4">Avis pour {book.title}</h2>
        <List
          items={sortedReviews}
          renderItem={(review) => (
            <div key={review.id} className="border-b pb-2 mb-2">
              <p>
                <strong>{review.rating} étoiles</strong> - {review.comment}
              </p>
              <p className="text-gray-500 text-sm">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          )}
        />
        <h3 className="text-xl mt-4">Ajouter un avis</h3>
        <Input
          label="Note (1-5)"
          type="number"
          min="1"
          max="5"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
        />
        <Input
          label="Commentaire (optionnel)"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        />
        <Button onClick={handleAddReview}>Ajouter l'avis</Button>
      </Drawer>
    </div>
  );
}

export default BookDetails;
