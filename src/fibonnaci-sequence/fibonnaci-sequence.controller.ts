import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('fibonnaci-sequence')
export class FibonnaciSequenceController {
    @Get('fibonnaci/:n')
    fibonnaci(@Param('n') n: string): {sequence: number[]} {
        const num1= parseInt(n,10);

        if (isNaN(num1) || num1 <= 0 ) {
            throw new Error('Number should have positive value.');
        }

        return { sequence: this.calculateFibonacci(num1)};
    }

    private calculateFibonacci(n :number): number[] {
        const fibonnaciseq = [];
        let a = 0, b = 1, temp;

        for (let i = 0; i < n; i++) {
            fibonnaciseq.push(a);
            temp = a;
            a = b;
            b = temp + b;
        }

        return fibonnaciseq;
    }
}
