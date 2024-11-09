import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeNumberController } from './prime-number/prime-number.controller';

@Module({
  imports: [],
  controllers: [AppController, PrimeNumberController],
  providers: [AppService],
})
export class AppModule {}
