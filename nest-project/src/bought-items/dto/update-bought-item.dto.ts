import { PartialType } from '@nestjs/mapped-types';
import { CreateBoughtItemDto } from './create-bought-item.dto';

export class UpdateBoughtItemDto extends PartialType(CreateBoughtItemDto) {}
