import React from 'react';

//function Book({img, title, author}) //{ //js destructuring from the parameters
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props; //js destructuring
  // attribute, eventhandler
  // onClick, onMouseOVer
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello');
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      {/* will run when you click it. */}
      <button type='button' onClick={() => complexExample('author: ' + author)}>
        more complex example
      </button>
      {/* this button will run on page load. the above will run on click */}
      <button type='button' onClick={complexExample(author)}>
        Will run ON PAGE LOAD
      </button>
      <button
        type='button'
        onClick={() => {
          console.log(title);
        }}
      >
        reference example2 TITLE
      </button>
      <button type='button' onClick={() => console.log(author)}>
        reference example3 AUTHOR
      </button>
    </article>
  );
};

export default Book;
