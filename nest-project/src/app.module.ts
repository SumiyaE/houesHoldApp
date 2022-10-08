import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoughtItemsModule } from './bought-items/bought-items.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BoughtItemsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
