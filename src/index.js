import React from 'react';
import ReactDom from 'react-dom';
// import App from 'App';

function Greeting() {
  return (
    <div className=''>
      <h1>fdsfsdf</h1>
      <Person />
      <Message />
      <p>sss s shh sshhj</p>
      <ul>
        <li>sadadfgfhghsadasssss</li>
        <li>sadadfgfhghsadasssss</li>
      </ul>
      <img src='' alt='' />
      <input type='text' />
    </div>
  );
}

const Person = () => <h2>davis umana</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello worsdfsdflsddff');
// };

ReactDom.render(<Greeting />, document.getElementById('root'));

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
