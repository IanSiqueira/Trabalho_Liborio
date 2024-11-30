import { Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL, // Certifique-se de configurar a variável de ambiente
      process.env.SUPABASE_KEY, // Certifique-se de configurar a variável de ambiente
    );
  }

  // Upload de imagem para o bucket
  async uploadImage(file: Express.Multer.File): Promise<string> {
    const bucketName = 'images'; // Nome do bucket no Supabase
    const filePath = `uploads/${Date.now()}-${file.originalname}`;

    const { data, error } = await this.supabase.storage
      .from(bucketName)
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) {
      throw new Error(`Erro ao fazer upload da imagem: ${error.message}`);
    }

    const { data: publicUrlData } = this.supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  }

  // Listar imagens do bucket
  async listImages(): Promise<string[]> {
    const bucketName = 'images'; // Nome do bucket no Supabase

    // Lista os arquivos no bucket
    const { data, error } = await this.supabase.storage.from(bucketName).list();

    if (error) {
      throw new Error(`Erro ao listar imagens: ${error.message}`);
    }

    // Mapeia os arquivos para URLs públicas
    return data.map((file) => {
      const { data: publicUrlData } = this.supabase.storage
        .from(bucketName)
        .getPublicUrl(file.name);
      return publicUrlData.publicUrl;
    });
  }
} // Adicionado o fechamento correto aqui
