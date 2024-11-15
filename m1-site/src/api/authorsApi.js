const API_URL = 'http://localhost:3001'; // URL de l'API Nest.js

export const getAuthors = async () => {
  try {
    const response = await fetch(`${API_URL}/authors`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};

export const getAuthor = async (id) => {
  try {
    const response = await fetch(`${API_URL}/authors/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching author:', error);
    throw error;
  }
};

export const createAuthor = async (authorData) => {
  try {
    const response = await fetch(`${API_URL}/authors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating author:', error);
    throw error;
  }
};

export const deleteAuthor = async (id) => {
  try {
    const response = await fetch(`${API_URL}/authors/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error deleting author:', error);
    throw error;
  }
};