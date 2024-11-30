import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  // Função para formatar o preço no padrão brasileiro
  const formatPrice = (price: number): string => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  if (!cart || cart.length === 0) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Seu carrinho está vazio
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Carrinho de Compras
      </Typography>
      <Box>
        {cart.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
              p: 2,
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          >
            <Typography variant="body1">{item.name}</Typography>
            {/* Formatação do preço individual */}
            <Typography variant="body2">{formatPrice(item.price)}</Typography>
            <Typography variant="body2">Quantidade: {item.quantity || 1}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </Button>
          </Box>
        ))}
      </Box>
      {/* Total do carrinho formatado */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: {formatPrice(cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0))}
      </Typography>
      <Button
          variant="contained"
          sx={{
            mt: 1,
            backgroundColor: 'green',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
          }}
          onClick={() => console.log('Botão clicado')}
        >
          Finalizar compra
        </Button>
    </Container>

  );
};

export default Cart;
