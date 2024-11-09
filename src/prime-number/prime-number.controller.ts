import { Controller, Get, Param } from '@nestjs/common';

@Controller('prime-number')
export class PrimeNumberController {
    @Get('prime/:n')
    getPrime(@Param('n') n: number): string {
        if (isNaN(n) || n < 1) {
            return 'You must provide a positive integer';
        }

        function isPrime(num1: number): boolean{
            for (let i = 2; i < num1; i++) {
                if (num1 % i === 0){
                    return false;
                }
            }

            return num1> 1;
        }

        return JSON.stringify({
            isPrime: isPrime(n),
        });

        
    }
}
