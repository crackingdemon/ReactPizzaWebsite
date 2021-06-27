import React from 'react';
import Products from './components/Products';
import { productData } from './components/Products/data';
import {BrowserRouter as Router} from 'react-router-dom';
import { Globalstyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Globalstyle/>
     <Hero/>
     <Products heading='Our Menu' data={productData} />
     <Footer/>
    </Router>
  );
}

export default App;
