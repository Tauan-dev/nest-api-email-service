import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [EmailModule, DatabaseModule],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
