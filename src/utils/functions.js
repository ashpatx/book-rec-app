import React from 'react';
import { BOOKS } from '../utils/books';

/**
 * Generates a random book recommendation based on user inputs.
 * @param {Object} args - User inputs including selectedCategory, selectedGenre, and length.
 * @returns {Object} - Random book recommendation object.
 */
export function generateRecommendation(args) {
    const { selectedCategory, selectedGenre, length } = args;

    // Validate inputs
    if (!selectedCategory || !selectedGenre || !length) {
        throw new Error('Missing input parameters');
    }

    // Check if the selected category and genre exist in the BOOKS dataset
    if (!BOOKS[selectedCategory] || !BOOKS[selectedCategory][selectedGenre]) {
        throw new Error('Invalid selectedGenre');
    }

    // Filter books based on selected category and genre
    const filteredBooks = BOOKS[selectedCategory][selectedGenre];

    // Filter books based on length
    const recommendedBooks = filteredBooks.filter(book => {
        // Assuming short books have less than or equal to 200 pages
        // Modify this condition based on your definition of short and long books
        if (length === 'short') {
            return parseInt(book.pages) <= 200;
        } else if (length === 'long') {
            return parseInt(book.pages) > 200;
        }
    });

    // Check if any books match the criteria
    if (recommendedBooks.length === 0) {
        throw new Error('No books found matching the criteria');
    }

    // Select a random book from the filtered list
    const randomIndex = Math.floor(Math.random() * recommendedBooks.length);
    const randomBook = recommendedBooks[randomIndex];

    return randomBook;
}
