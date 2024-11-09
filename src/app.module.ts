import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonnaciSequenceController } from './fibonnaci-sequence/fibonnaci-sequence.controller';

@Module({
  imports: [],
  controllers: [AppController, FibonnaciSequenceController],
  providers: [AppService],
})
export class AppModule {}
