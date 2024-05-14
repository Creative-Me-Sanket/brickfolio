
import './App.css';
import Hero from './components/Hero';
import { Route, Routes } from 'react-router-dom';
import Assignment from './features/Assignment';
import ProductsByCategory from './components/ProductsByCategory';


function App() {

  return (
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/products-by-category" element={<ProductsByCategory />} />
      </Routes>
  );
}

export default App;
