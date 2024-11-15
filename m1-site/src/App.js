import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout';
import Acceuil from './pages/acceuil';
import Authors from './pages/auteur';
import Books from './pages/book';
import BooksDetails from './pages/bookDetails';
import AuthorDetail from './pages/auteurDetails';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/auteur" element={<Authors />} />
          <Route path="/book" element={<Books/>} />
          <Route path="/auteur/:id" element={<AuthorDetail authors={Authors} />} />
          <Route path="/book/:id" element={<BooksDetails books={Books} />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
