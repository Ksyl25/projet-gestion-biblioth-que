import React from 'react';
import Input from './input';
import Button from './button';

const AddAuthorModal = ({ isModalOpen, setIsModalOpen, newAuthor, setNewAuthor, handleAddAuthor }) => {
    return (
        isModalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-2xl mb-4">Ajouter un nouvel auteur</h2>
                    <Input
                        label="Nom"
                        value={newAuthor.author_name}
                        onChange={(e) => setNewAuthor({ ...newAuthor, author_name: e.target.value })}
                    />
                    <Input
                        label="URL de la photo"
                        value={newAuthor.photo_url}
                        onChange={(e) => setNewAuthor({ ...newAuthor, photo_url: e.target.value })}
                    />
                    <Input
                        label="Biographie"
                        value={newAuthor.biography}
                        onChange={(e) => setNewAuthor({ ...newAuthor, biography: e.target.value })}
                    />
                    <Button onClick={handleAddAuthor}>Enregistrer</Button>
                    <Button onClick={() => setIsModalOpen(false)} className="ml-4 bg-red-500">
                        Annuler
                    </Button>
                </div>
            </div>
        )
    );
};

export default AddAuthorModal;
