import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactorialCalculatorController } from './factorial-calculator/factorial-calculator.controller';

@Module({
  imports: [],
  controllers: [AppController, FactorialCalculatorController],
  providers: [AppService],
})
export class AppModule {}
