import React, { useState, useEffect } from 'react';

export default function BookCard({ book }) {
  const { title, author, publicationDate, pages, summary } = book;
  const [coverUrl, setCoverUrl] = useState('');

  useEffect(() => {
    // Function to fetch book cover from Google Books API
    async function fetchBookCover() {
      try {
        // Make a GET request to the Google Books API with the book title and author
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`);
        const data = await response.json();
        // Extract the cover URL from the response data
        const cover = data?.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
        if (cover) {
          setCoverUrl(cover);
        }
      } catch (error) {
        console.error('Error fetching book cover:', error);
      }
    }

    fetchBookCover(); // Call the fetchBookCover function when the component mounts
  }, [title, author]);

  // Split the author name into parts using the comma as delimiter
  const parts = author.split(", ");
  // Rearrange the parts to switch first name and last name
  const rearrangedName = parts.reverse().join(" ");

  return (
    <div className="book-card">
      {coverUrl && <img src={coverUrl} alt="Book Cover" />}
      <h2 className='text-lg'>{title}</h2>
      <p>Author: {rearrangedName}</p>
      <p>Published in: {publicationDate}</p>
      <p>Length: { pages} pages</p>
      <p>Description: {summary}</p>
    </div>
  );
}
