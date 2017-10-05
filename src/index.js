import React, {Component} from 'react';
import {render} from 'react-dom';

function App() {
  return <div> Hello World!!! </div>
};

const target = document.getElementById("root");

render(<App />, target);
