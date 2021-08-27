import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HohoService } from './hoho.service';
import { CreateHohoDto } from './dto/create-hoho.dto';
import { UpdateHohoDto } from './dto/update-hoho.dto';

@Controller('hoho')
export class HohoController {
  constructor(private readonly hohoService: HohoService) {}

  @Post()
  create(@Body() createHohoDto: CreateHohoDto) {
    return this.hohoService.create(createHohoDto);
  }

  @Get()
  findAll() {
    return this.hohoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hohoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHohoDto: UpdateHohoDto) {
    return this.hohoService.update(+id, updateHohoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hohoService.remove(+id);
  }
}
