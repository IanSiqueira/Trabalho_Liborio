import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number | string; // O preço pode ser um número ou uma string
  imageUrl: string;
}

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const isInCart = (id: number) => cart.some((item) => item.id === id);

  const formatPrice = (price: number | string): string => {
    let numericPrice: number;

    // Verifica se o preço é um número ou string e faz a conversão adequada
    if (typeof price === 'number') {
      numericPrice = price;
    } else if (typeof price === 'string') {
      numericPrice = parseFloat(price.replace(',', '.')); // Converte string para número
    } else {
      return 'Preço indisponível'; // Caso o valor seja inválido
    }

    // Retorna o preço formatado no padrão brasileiro
    return numericPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <Typography>{product.name}</Typography>
              {/* Chama a função para formatar o preço */}
              <Typography>{formatPrice(product.price)}</Typography>
              <IconButton
                onClick={() =>
                  isInCart(product.id)
                    ? removeFromCart(product.id)
                    : addToCart(product)
                }
              >
                {isInCart(product.id) ? (
                  <RemoveShoppingCartIcon />
                ) : (
                  <AddShoppingCartIcon />
                )}
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
