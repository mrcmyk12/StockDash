import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(<div className='container'><App/></div>, document.querySelector('#root'))