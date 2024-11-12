import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          BIBLIO J
        </Link>

        {/* Liens de Navigation */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Accueil
          </Link>
          <Link to="/auteur" className="text-white hover:text-gray-200">
            Auteur
          </Link>
          <Link to="/book" className="text-white hover:text-gray-200">
            Mes livres
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
