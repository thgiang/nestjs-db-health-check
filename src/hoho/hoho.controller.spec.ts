import { Test, TestingModule } from '@nestjs/testing';
import { HohoController } from './hoho.controller';
import { HohoService } from './hoho.service';

describe('HohoController', () => {
  let controller: HohoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HohoController],
      providers: [HohoService],
    }).compile();

    controller = module.get<HohoController>(HohoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
