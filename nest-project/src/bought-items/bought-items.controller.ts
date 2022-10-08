import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoughtItemsService } from './bought-items.service';
import { CreateBoughtItemDto } from './dto/create-bought-item.dto';
import { UpdateBoughtItemDto } from './dto/update-bought-item.dto';

@Controller('bought-items')
export class BoughtItemsController {
  constructor(private readonly boughtItemsService: BoughtItemsService) {}

  @Post()
  create(@Body() createBoughtItemDto: CreateBoughtItemDto) {
    return this.boughtItemsService.create(createBoughtItemDto);
  }

  @Get()
  findAll() {
    return this.boughtItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boughtItemsService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoughtItemDto: UpdateBoughtItemDto,
  ) {
    // eslint-disable-next-line prettier/prettier
    return this.boughtItemsService.update({ id: +id }, updateBoughtItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boughtItemsService.remove(+id);
  }
}
