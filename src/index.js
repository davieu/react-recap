import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './scss/index.css';

//setup vars
const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },

  {
    img: 'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
function BookList() {
  return <section className='booklist'>{newNames}</section>;
}

//function Book({img, title, author}) //{ //js destructuring from the parameters
function Book(props) {
  // const { img, title, author } = props; //js destructuring
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <h4>{props.children}</h4>
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
