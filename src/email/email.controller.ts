import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDTO } from './dto/create-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  findAll() {
    return 'Envio de email';
  }

  @Post()
  create(@Body() createEmailDTO: CreateEmailDTO) {
    return this.emailService.create(createEmailDTO);
  }

  @Post('send')
  async sendEmail(@Body() CreateEmailDTO: CreateEmailDTO) {
    console.log('Dados recebidos', CreateEmailDTO);
    try {
      await this.emailService.sendEmail(
        CreateEmailDTO.id,
        CreateEmailDTO.sender,
        CreateEmailDTO.emailToSend,
        CreateEmailDTO.subject,
        CreateEmailDTO.description,
      );
      console.log(`teste ${CreateEmailDTO.emailToSend}`);
      return 'email enviado com sucesso';
    } catch (error) {
      throw new Error(`Erro ao enviar o email ${error}`);
    }
  }
}
