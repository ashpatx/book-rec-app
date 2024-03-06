import React from 'react';
import { BOOKS } from '../utils/books';

/**
 * Generates a random book recommendation based on user inputs.
 * @param {Object} args - User inputs including selectedCategory, selectedGenre, and length.
 * @returns {Object} - Random book recommendation object.
 */
export function generateRecommendation(selectedCategory, selectedGenre, selectedLength) {
    // Filter books based on selectedCategory and selectedGenre
    const filteredByCategory = BOOKS[selectedCategory][selectedGenre];

    // Filter books based on selectedLength
    const filteredByLength = filteredByCategory.filter(book => {
        const pages = parseInt(book.pages);
        return selectedLength === 'short' ? pages < 259 : pages > 259;
    });

    // Randomly select a book from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredByLength.length);
    const randomBook = filteredByLength[randomIndex];

    return randomBook;
}
