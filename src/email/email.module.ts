import { Module } from '@nestjs/common';
import { Email } from './entities/email.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Email])],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService, TypeOrmModule.forFeature([Email])],
})
export class EmailModule {}
