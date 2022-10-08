import React from 'react';
import { useQuery, gql } from '@apollo/client';

const getBooksQuery = gql`
  {
    books {
      name
      author {
        name
      }
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return (
    <div>
      <ul id="bookList">
        {data.books.map((book) => (
          <li>
            <strong>{book.name}</strong> by {book.author?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
