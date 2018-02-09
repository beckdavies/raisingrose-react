var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

// 2. then render the component to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('app')
);