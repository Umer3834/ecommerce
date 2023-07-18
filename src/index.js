import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Appprovider } from './contax/productcontac';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Appprovider>
<BrowserRouter>
<App />
</BrowserRouter>
</Appprovider>


 
);



