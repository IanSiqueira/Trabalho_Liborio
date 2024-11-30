import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Rating,
  CircularProgress,
} from '@mui/material';
import Slider from 'react-slick';
import axios from 'axios';

interface Review {
  id: number;
  name: string;
  rating: number;
  feedback: string;
}

const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/customer-reviews');
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          setError('Erro ao processar os dados recebidos.');
        }
      } catch (err) {
        setError('Erro ao carregar avaliações. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 6, mb: 6 }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Carregando avaliações...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: 'center', mt: 6, mb: 6 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Para telas menores
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ mt: 6, mb: 6, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Avaliações de Consumidores
      </Typography>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id}>
            <Card
              sx={{
                padding: '20px',
                margin: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                backgroundColor: '#ffffff',
                color: '#000000',
              }}
            >
              <CardContent>
                <Rating value={review.rating} readOnly />
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: '15px',
                    marginBottom: '15px',
                    fontStyle: 'italic',
                    color: '#333333',
                  }}
                >
                  "{review.feedback}"
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#000000' }}>
                  {review.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default CustomerReviews;
