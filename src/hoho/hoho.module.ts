import { Module } from '@nestjs/common';
import { HohoService } from './hoho.service';
import { HohoController } from './hoho.controller';
import { Hoho } from './entities/hoho.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hoho])],
  controllers: [HohoController],
  providers: [HohoService],
})
export class HohoModule {}
