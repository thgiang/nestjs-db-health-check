import { Test, TestingModule } from '@nestjs/testing';
import { HohoService } from './hoho.service';

describe('HohoService', () => {
  let service: HohoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HohoService],
    }).compile();

    service = module.get<HohoService>(HohoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
