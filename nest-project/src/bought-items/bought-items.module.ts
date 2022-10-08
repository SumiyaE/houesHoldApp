import { Module } from '@nestjs/common';
import { BoughtItemsService } from './bought-items.service';
import { BoughtItemsController } from './bought-items.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BoughtItemsController],
  providers: [BoughtItemsService],
  imports: [PrismaModule],
})
export class BoughtItemsModule {}
