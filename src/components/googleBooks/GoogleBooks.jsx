import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GoogleBooksStyles.css";

function GoogleBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=coding+javascript+python+beginner&orderBy=relevance&maxResults=9"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="google-books">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.name}
              />
              <div>
                <h3>{book.volumeInfo.title}</h3>
                <p>By: {book.volumeInfo.authors.join(", ")}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoogleBooks;
