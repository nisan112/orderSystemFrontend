import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Breakfast from './components/Breakfast';
import { OrderProvider } from './components/OrderObject';
import Summary from './components/Summary';

function App() {
  return (
    <OrderProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
           <Route path="/breakfast" element={<Breakfast />} />
           <Route path = "/summary" element = {<Summary />} />
        </Routes>
    </OrderProvider>
  );
}

export default App;
