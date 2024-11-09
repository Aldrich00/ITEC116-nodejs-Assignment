import { Test, TestingModule } from '@nestjs/testing';
import { FibonnaciSequenceController } from './fibonnaci-sequence.controller';

describe('FibonnaciSequenceController', () => {
  let controller: FibonnaciSequenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibonnaciSequenceController],
    }).compile();

    controller = module.get<FibonnaciSequenceController>(FibonnaciSequenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
