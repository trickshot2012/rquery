import React from 'react';
import './App.css';

function App() {
  const queryString = require('query-string');
  const parsed = queryString.parse(window.location.search);
  let id=parsed["id"];
  return (
    <div>
      <h1>How to get queryString</h1>  
      <h4>add ID with parameter for e.g. ?id=12</h4>
      <h3>id:{id}</h3>
    </div>
  );
}

export default App;
