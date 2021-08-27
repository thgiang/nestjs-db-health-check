import { PartialType } from '@nestjs/mapped-types';
import { CreateHohoDto } from './create-hoho.dto';

export class UpdateHohoDto extends PartialType(CreateHohoDto) {}
