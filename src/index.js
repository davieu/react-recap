import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './scss/index.css';

//setup vars
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },

  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
    title: 'If Animals Kissed Good Night',
    author: 'Ann Whitford Paul',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {/* {books.map((book, index) => { // will index the objects. You can use index as the key instead*/}
      {books.map((book) => {
        console.log(book);
        // const { img, title, author } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

//function Book({img, title, author}) //{ //js destructuring from the parameters
function Book(props) {
  // const { img, title, author } = props; //js destructuring
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className='book'>
      {/* This is the non destructured rendering of the book object */}
      {/* <img src={props.book.img} alt='' />
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4> */}

      {/* destructred book object */}
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <h4>{props.book.children}</h4> */}
    </article>
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
