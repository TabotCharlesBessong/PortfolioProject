import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../../../component";
import axios from "axios";

const LibraryContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Library = () => {
  // State for managing book records
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/book/getall"
      );
      console.log("Response data:", response.data); // Log the response data
      setBooks(response.data.books); // Update to access books array from response.data
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Function to add a new book
  const addBook = async (book) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/book/create",
        {
          bookname: book.title,
          author: book.author,
        }
      );
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Function to handle when a student picks a book
  const handleBookPick = async (bookId, studentId) => {
    // Implement logic to record when a student picks a book
  };

  // Function to handle when a student returns a book
  const handleBookReturn = async (bookId, studentId) => {
    // Implement logic to mark when a student returns a book
  };

  return (
    <LibraryContainer>
      <Sidebar />
      <Content>
        <h1>Library Management</h1>
        {/* Add Book Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const book = {
              id: Math.random().toString(36).substr(2, 9),
              title: e.target.title.value,
              author: e.target.author.value,
            };
            addBook(book);
            e.target.reset();
          }}
        >
          <h2>Add New Book</h2>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" required />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" required />
          <button type="submit">Add Book</button>
        </form>

        {/* List of Books */}
        <h2>Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              {book.bookname} by {book.author} {/* Update property names */}
              <button onClick={() => handleBookPick(book._id, "student123")}>
                Pick
              </button>
              <button onClick={() => handleBookReturn(book._id, "student123")}>
                Return
              </button>
            </li>
          ))}
        </ul>
      </Content>
    </LibraryContainer>
  );
};

export default Library;
