import React from 'react';
import { AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cart } = useCart();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        margin: 0, 
        padding: 0, 
        boxShadow: 'none', // Remove sombras padrão que podem parecer bordas
      }}
    >
      <Toolbar 
        sx={{ 
          margin: 0, 
          padding: 0 
        }}
      >
        <IconButton href="/cart" color="inherit">
          <Badge badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
