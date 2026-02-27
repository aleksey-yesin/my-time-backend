import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MastersService } from './masters.service';
import { MastersController } from './masters.controller';
import { Master } from './entities/master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Master])],
  controllers: [MastersController],
  providers: [MastersService],
})
export class MastersModule {}
