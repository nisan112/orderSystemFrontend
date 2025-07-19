import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'; // ✅ use BrowserRouter
import { OrderProvider } from './components/OrderObject';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OrderProvider>
  </React.StrictMode>
);

reportWebVitals();
