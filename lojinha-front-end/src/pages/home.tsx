import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
  Box,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import HighlightsCarousel from '../components/highlightsCarousel';
import TopCategories from '../components/topCategories';
import CustomerReviews from '../components/customerReviews';
import ProductsGrid from '../components/productsGrid';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<any[]>([]);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: '',
  });

  const { cart, addToCart, removeFromCart } = useCart();

  // Função para monitorar a rolagem da página
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lida com a alteração no campo de pesquisa
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log(`Searching for: ${search}`);
  };

  // Carrega os produtos do backend ao montar o componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCartChange = (product: any, action: 'add' | 'remove') => {
    if (action === 'add') {
      addToCart(product);
      setSnackbar({ open: true, message: 'Produto adicionado ao carrinho!' });
    } else {
      removeFromCart(product.id);
      setSnackbar({ open: true, message: 'Produto removido do carrinho!' });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, message: '' });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        color: '#000000',
        padding: 0,
        margin: 0,
      }}
    >
      {showHeader && (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: '#f5f5f5',
            boxShadow: 'none',
            zIndex: 1100,
            margin: 0,
            padding: 0,
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', color: '#000000' }}
            >
              O Mundo do Panettone
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Buscar produtos, marcas e muito mais..."
              value={search}
              onChange={handleSearchChange}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                width: { xs: '100%', sm: '60%' },
                input: { color: '#000000' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#cccccc' },
                  '&:hover fieldset': { borderColor: '#000000' },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearchSubmit}>
                      <SearchIcon sx={{ color: '#000000' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton href="/cart">
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon sx={{ color: '#000000' }} />
                </Badge>
              </IconButton>
              <IconButton href="/login">
                <AccountCircleIcon sx={{ color: '#000000' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {/* Carrossel de Destaques */}
      <Box sx={{ mt: 0 }}>
        <HighlightsCarousel />
      </Box>

      {/* Top Categorias */}
      <Box sx={{ mt: 2 }}>
        <TopCategories />
      </Box>

      {/* Produtos em Destaque */}
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: '#000000', fontWeight: 'bold' }}
        >
          Produtos em Destaque
        </Typography>
        <ProductsGrid
          products={products}
          cart={cart}
          onCartChange={handleCartChange}
        />
      </Container>

      {/* Avaliações de Consumidores */}
      <Box sx={{ mt: 2 }}>
        <CustomerReviews />
      </Box>

      {/* Rodapé */}
      <Box
        component="footer"
        sx={{
          mt: 2,
          py: 2,
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="body2" sx={{ color: '#666666' }}>
          © 2024 O Mundo do Panettone - Todos os direitos reservados.
        </Typography>
      </Box>

      {/* Snackbar para mensagens */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
