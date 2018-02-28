import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';

// 2. then render the component to the DOM
render(<App/>, document.querySelector('#app'));