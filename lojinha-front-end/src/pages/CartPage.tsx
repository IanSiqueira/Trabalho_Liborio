import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  // Função para calcular o total
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Compra finalizada com sucesso!');
    // Aqui você pode integrar com um backend ou limpar o carrinho
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Carrinho de Compras
      </Typography>
      {cart.length === 0 ? (
        <Typography>Seu carrinho está vazio!</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
            >
              <Box>
                <Typography>{item.name}</Typography>
                <Typography>R$ {item.price.toFixed(2)}</Typography>
              </Box>
              <Box>
                <Typography>Quantidade: {item.quantity}</Typography>
                <Button
                  variant="text"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                >
                  REMOVER
                </Button>
              </Box>
            </Box>
          ))}
          {/* Total e botão de finalizar compra */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4,
              padding: '16px',
              backgroundColor: '#1c1c1c',
              borderRadius: '8px',
            }}
          >
            <Typography variant="h6">Total: R$ {calculateTotal()}</Typography>
            <Button
              variant="contained"
              color="success"
              onClick={handleCheckout}
            >
              Finalizar Compra
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;
