import React from 'react';
import ReactDOM from 'react-dom/client';
import './componet/Styles.css'


import {CounterApp} from './componet/CounterApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <CounterApp value={20} />
  </React.StrictMode>

);