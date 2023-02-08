import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// js 생략
// import reportWebVitals from './reportWebVitals';

//리액트 가상 돔 만듬
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
root.render(
  //사용자 정의 태그 (javascript.js)
  // <app></app> = <app />
  <React.StrictMode>
    <App />

  </React.StrictMode>
  
);
*/
setInterval(()=>{root.render(
  <App />
)}, 1000);


// reportWebVitals(console.log);
//웹 성능 체크
