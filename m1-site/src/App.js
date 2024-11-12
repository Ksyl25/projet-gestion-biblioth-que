import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Layout from './components/layout';
import Acceuil from './pages/acceuil';
import Authors from './pages/auteur';
import Books from './pages/book';


function App() {
  return (
    <Router>
      <Layout>
        <Navbar />

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/auteur" element={<Authors />} />
          <Route path="/book" element={<Books/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
