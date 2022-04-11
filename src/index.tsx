import React from 'react';
import './index.css';
import App from './app';
// @ts-ignore
import {createRoot} from 'react-dom/client';
import '@fortawesome/fontawesome-free/js/all.js';

createRoot(document.getElementById('root'))
    .render(<App/>);