import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './styles/banner.sass';
import './styles/navbar.sass';
import './styles/aboutcontent.sass';
import './styles/aboutconsultation.sass';
import './styles/meetconsultancy.sass';
import './styles/doubts.sass';
import './styles/contact.sass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


