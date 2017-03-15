import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { estadoAcademico, examenes } from './data'

ReactDOM.render(
  <App examenes={examenes} estadoAcademico={estadoAcademico} />,
  document.getElementById('root')
);
