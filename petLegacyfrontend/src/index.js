import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Button, Card, Row, Col } from 'react-materialize';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
