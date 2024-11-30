import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    id: 1,
    url: 'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/ChocoFriday24_eComm_Banner_desk_v1_1310x434.webp', // Substitua pela URL da sua imagem
    alt: 'Promoção 1',
  },
  {
    id: 2,
    url: 'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/ECOMM_BANNER_DESKTOP_1310x434.webp', // Substitua pela URL da sua imagem
    alt: 'Promoção 2',
  },
  {
    id: 3,
    url: 'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/banner_desk_panettone_hp.webp', // Substitua pela URL da sua imagem
    alt: 'Promoção 3',
  },
  {
    id: 4,
    url: 'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/DESK%20ESQUENTA%2015.webp', // Substitua pela URL da sua imagem
    alt: 'Promoção 3',
  },
  {
    id: 5,
    url: 'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/desk%20lp%20bf.png', // Substitua pela URL da sua imagem
    alt: 'Promoção 3',
  },
  {
    id: 6,
    url: 'https://qwdosfwrfksuickavofm.supabase.co/storage/v1/object/public/loja-panetone/29f1f396-cb10-4393-9e7c-40eb6b635154___9577edf69da0532c11c74033d87ba5b6.webp?t=2024-11-24T18%3A24%3A36.528Z', // Substitua pela URL da sua imagem
    alt: 'Promoção 3',
  },
];

const HighlightsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.url}
              alt={image.alt}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                margin: 0,
                padding: 0,
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default HighlightsCarousel;
