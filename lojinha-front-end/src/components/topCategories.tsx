import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const categories = [
  {
    id: 1,
    name: 'Panetones',
    imageUrl:
      'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/istockphoto-119742818-612x612.jpg',
  },
  {
    id: 2,
    name: 'Chocotones',
    imageUrl:
      'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/chocotone.webp?t=2024-11-24T18%3A35%3A26.277Z',
  },
];

const TopCategories: React.FC = () => {
  return (
    <div style={{ marginTop: '40px', padding: '0 20px' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
        }}
      >
        Top Categorias
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Card
              sx={{
                textAlign: 'center',
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: 'background.paper', // Usa a cor do tema
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 12px rgba(0,0,0,0.2)',
                },
              }}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '12px',
                }}
              />
              <CardContent>
                <Typography variant="h6">{category.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TopCategories;
