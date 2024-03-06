import React from 'react';
import { BOOKS } from '../utils/books';

/**
 * Generates a random book recommendation based on user inputs.
 * @param {Object} args - User inputs including selectedCategory, selectedGenre, and length.
 * @returns {Object} - Random book recommendation object.
 */
export function generateRecommendation(selectedCategory, selectedGenre) {
    // Filter books based on selected category and genre
    const filteredBooks = BOOKS[selectedCategory][selectedGenre];

    // Filter books based on page count (> 259 pages)
    const filteredByPageCount = filteredBooks.filter(book => parseInt(book.pages) > 259);

    // Check if there are any books left after filtering
    if (filteredByPageCount.length === 0) {
        throw new Error('No books matching the criteria');
    }

    // Select a random book from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredByPageCount.length);
    const randomBook = filteredByPageCount[randomIndex];

    return randomBook;
}
