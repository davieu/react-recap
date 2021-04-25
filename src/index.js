import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './scss/index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

function Book() {
  const title = 'I Love You to the Moon and Back';
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>Amelia Hepworth</h4>
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
