import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/images');
        setImages(response.data);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
