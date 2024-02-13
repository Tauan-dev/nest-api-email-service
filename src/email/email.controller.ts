import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDTO } from './dto/create-email.dto'; // Renomeie corretamente o DTO

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('send')
  findAll() {
    return 'Envio de email';
  }

  @Post()
  create(@Body() createEmailDTO: CreateEmailDTO) {
    return this.emailService.create(createEmailDTO);
  }
}
