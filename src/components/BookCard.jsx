import React from 'react';

export default function BookCard({ book }) { // Changed prop name to 'book'
  const { title, author, length, description } = book;

  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Length: {length} pages</p>
      <p>Description: {description}</p>
    </div>
  );
}
