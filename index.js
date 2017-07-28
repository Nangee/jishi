import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Home from './components/Main/Home/Home';
import Nav from './components/Main/Conter/Nav';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<div><Nav/></div>,document.getElementById('root'));
registerServiceWorker();
