import { Injectable } from '@nestjs/common';
import { CreateHohoDto } from './dto/create-hoho.dto';
import { UpdateHohoDto } from './dto/update-hoho.dto';
import { Hoho } from './entities/hoho.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HohoService {
  constructor(
    @InjectRepository(Hoho)
    private readonly hohoRepository: Repository<Hoho>,
  ) {}
  create(createHohoDto: CreateHohoDto) {
    return 'This action adds a new hoho';
  }

  findAll() {
    return this.hohoRepository.findOne();
  }

  findOne(id: number) {
    return `This action returns a #${id} hoho`;
  }

  update(id: number, updateHohoDto: UpdateHohoDto) {
    return `This action updates a #${id} hoho`;
  }

  remove(id: number) {
    return `This action removes a #${id} hoho`;
  }
}
