import React from 'react';
import { GENRES, BOOKS, LENGTH } from '../utils/books';

/**
 * Generates a random book recommendation based on user inputs.
 * @param {Object} args - User inputs including selectedCategory, selectedGenre, and length.
 * @returns {Object} - Random book recommendation object.
 */
export function generateRecommendation({selectedCategory, selectedGenre = [], selectedLength}) {
    console.log("Selected category:", selectedCategory);
    console.log("Selected genre:", selectedGenre);
    console.log("Books for selected category:", BOOKS[selectedCategory]);

    // Filter books based on selectedCategory
    const filteredByCategory = BOOKS[selectedCategory];

    // Ensure selectedGenre is an array
    if (!Array.isArray(selectedGenre)) {
        selectedGenre = [];
    }

    // Filter books based on selectedGenre
    const filteredByGenre = selectedGenre.reduce((filteredBooks, genre) => {
        const genreBooks = filteredByCategory[genre] || []; // If genre doesn't exist, default to an empty array
        return [...filteredBooks, ...genreBooks];
    }, []);

    // Log filteredByGenre for debugging
    console.log("Filtered by genre:", filteredByGenre);

    // Filter books based on selectedLength
    const filteredByLength = filteredByGenre.filter(book => {
        const pages = parseInt(book.pages);
        return selectedLength === 'short' ? pages < 259 : pages > 259;
    });

    // Log filteredByLength for debugging
    console.log("Filtered by length:", filteredByLength);

    // Randomly select a book from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredByLength.length);
    const randomBook = filteredByLength[randomIndex];

    // Log the random book for debugging
    console.log("Random book:", randomBook);

    return randomBook;
}
