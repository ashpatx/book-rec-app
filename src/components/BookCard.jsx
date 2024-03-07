import React from 'react';

export default function BookCard({ book }) {
  const { title, author, publicationDate, pages, summary } = book;

  // Split the author name into parts using the comma as delimiter
  const parts = author.split(", ");

  // Rearrange the parts to switch first name and last name
  const rearrangedName = parts.reverse().join(" ");

  return (





    <div className="book-card">
      <h2 className='text-lg'>{title}</h2>
      <p>Author: {rearrangedName}</p>
      <p>Published in: {publicationDate}</p>
      <p>Length: {pages} pages</p>
      <p>Description: {summary}</p>
    </div>
  );
}
