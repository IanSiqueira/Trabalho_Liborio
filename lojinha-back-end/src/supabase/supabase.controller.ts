import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  // Endpoint para listar imagens do bucket
  @Get('list-images')
  async listImages(): Promise<string[]> {
    return await this.supabaseService.listImages();
  }
}
