import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import CreateProduct from './components/CreateProduct';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Box
        sx={{
          backgroundColor: '#121212',
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden',
          color: '#fff',
        }}
      >
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} /> {/* Nova rota */}
          </Routes>
        </Router>
      </Box>
    </CartProvider>
  );
};

export default App;
