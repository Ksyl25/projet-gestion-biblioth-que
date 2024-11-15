const API_URL = 'http://localhost:3001'; // URL de l'API Nest.js

export const getBookReviews = async () => {
  try {
    const response = await fetch(`${API_URL}/book-reviews`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching book reviews:', error);
    throw error;
  }
};

export const getBookReview = async (id) => {
  try {
    const response = await fetch(`${API_URL}/book-reviews/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching book review:', error);
    throw error;
  }
};

export const createBookReview = async (bookReviewData) => {
  try {
    const response = await fetch(`${API_URL}/book-reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookReviewData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating book review:', error);
    throw error;
  }
};

export const deleteBookReview = async (id) => {
  try {
    const response = await fetch(`${API_URL}/book-reviews/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error deleting book review:', error);
    throw error;
  }
};