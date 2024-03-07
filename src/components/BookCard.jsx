import React, { useState, useEffect } from 'react';

export default function BookCard({ book }) {
  const { title, author, publicationDate, pages, summary } = book;
  const [coverUrl, setCoverUrl] = useState('');

  useEffect(() => {
    //Function to fetch book cover from Google Books API
    async function fetchBookCover() {
      try {
        //GET request to the Google Books API with the book title and author
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`);
        const data = await response.json();
        //Extract cover URL from response data
        const cover = data?.items?.[0]?.volumeInfo?.imageLinks?.thumbnail;
        if (cover) {
          setCoverUrl(cover);
        }
      } catch (error) {
        console.error('Error fetching book cover:', error);
      }
    }

    fetchBookCover(); //Call the fetchBookCover function when the component mounts
  }, [title, author]);

  //Split  author name into parts using comma as a delimiter
  const parts = author.split(", ");
  //Rearrange the parts to switch first name and last name
  const rearrangedName = parts.reverse().join(" ");

  return (
    <div>
      <div className="book-card mt-4 p-4 rounded-md flex items-center gap-4 border border-slate-950">
        {coverUrl && <img src={coverUrl} alt="Book Cover" className='object-none w-32 h-48' />}
        <div className="p-4 flex flex-col">
          <h2 className='font-bold underline underline-offset-4'>{title}</h2>
          <p>Author: {rearrangedName}</p>
          <p>Published in: {publicationDate}</p>
          <p>Length: {pages} pages</p>
          <p>Description: {summary}</p>
        </div>
      </div>
      <div className='fixed bottom-0 flex items-center justify-center text-slate-900'>
        <p className="text-md">Happy Reading 📚 Made by <a href="https://twitter.com/ashpatx" className='text-pink-700'>@ashpatx</a></p>
      </div>
    </div>
  );
}