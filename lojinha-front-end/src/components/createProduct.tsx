import React, { useState } from 'react';
import api from '../api/axios'; // Certifique-se de ajustar o caminho correto do arquivo `axios.ts`;

// Define a tipagem para os dados do produto
interface CreateProductProps {
  name: string;
  price: number;
  file: File | null;
}

const CreateProduct: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number | ''>('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price.toString());
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await api.post('/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Produto criado:', response.data);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        required
      />
      <button type="submit">Criar Produto</button>
    </form>
  );
};

export default CreateProduct;
