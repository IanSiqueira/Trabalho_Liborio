import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // Exporte o serviço para outros módulos
})
export class DatabaseModule {}
