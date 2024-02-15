import { Injectable } from '@nestjs/common';
import { Email } from './entities/email.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmailDTO } from './dto/create-email.dto';
import { Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  // Métodos CRUD

  async create(CreateEmailDTO: CreateEmailDTO) {
    const email = this.emailRepository.create(CreateEmailDTO);

    return this.emailRepository.save(email);
  }

  async sendEmail(
    id: number,
    sender: string,
    emailToSend: string,
    subject: string,
    description: string,
  ) {
    // Configurações do serviço de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tauanspider@gmail.com',
        pass: 'eyqc pxge fjdv rehn',
      },
    });

    const mailOptions = {
      from: sender,
      to: emailToSend,
      subject: subject,
      text: description,
    };

    await transporter.sendMail(mailOptions);

    // Criar um novo registro de email no banco de dados
    const email = await this.create({
      id: id, // ou qualquer outra forma de gerar o ID
      sender,
      emailToSend,
      subject,
      description,
    });

    return email;
  }
}
