import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 300, // Define a largura máxima para o card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden', // Garante que a imagem respeite os limites
        display: 'flex',
        flexDirection: 'column', // Organiza conteúdo em coluna
        backgroundColor: '#fff', // Cor de fundo do card
      }}
    >
    <CardMedia
    component="img"
    image={product.imageUrl}
    alt={product.name}
    sx={{
        height: 180, // Ajuste de altura da imagem
        objectFit: 'contain', // Mantém a imagem ajustada ao espaço sem cortar
        width: '100%', // Largura 100% do card
        maxHeight: 180, // Limite de altura
    }}
    />

      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
