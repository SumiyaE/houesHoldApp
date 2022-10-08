import { Injectable } from '@nestjs/common';
import { BoughtItem, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoughtItemDto } from './dto/create-bought-item.dto';
import { UpdateBoughtItemDto } from './dto/update-bought-item.dto';

@Injectable()
export class BoughtItemsService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateBoughtItemDto) {
    return this.prisma.boughtItem.create({ data });
  }

  findAll() {
    return this.prisma.boughtItem.findMany();
  }

  findOne(
    userWhereUniqueInput: Prisma.BoughtItemWhereUniqueInput,
  ): Promise<BoughtItem | null> {
    return this.prisma.boughtItem.findUnique({ where: userWhereUniqueInput });
  }

  update(
    id: Prisma.BoughtItemWhereUniqueInput,
    updateBoughtItemDto: UpdateBoughtItemDto,
  ) {
    return this.prisma.boughtItem.update({
      data: updateBoughtItemDto,
      where: id,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} boughtItem`;
  }
}
