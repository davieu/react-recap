import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './scss/index.css';

import { greeting } from './testing/testing';
import { books } from './books';
import Book from './Book';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {/* {books.map((book, index) => { // will index the objects. You can use index as the key instead*/}
      {books.map((book) => {
        console.log(book);
        // const { img, title, author } = book;
        // return <Book key={book.id} book={book}></Book>;
        // spreading the book object with ...
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));

// // Boiler
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
