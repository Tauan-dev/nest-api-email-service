import { Injectable } from '@nestjs/common';
import { Email } from './entities/email.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmailDTO } from './dto/create-email.dto';
import { Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';
import { EmailController } from './email.controller';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  // METHODS CRUDING

  async findAll() {
    return await this.emailRepository.find();
  }

  async create(createEmail: CreateEmailDTO) {
    const email = this.emailRepository.create({
      ...createEmail,
    });

    return this.emailRepository.save(email);
  }

  async sendEmail(
    sender: string,
    emailToSend: string,
    description: string,
    subject: string,
  ) {
    // configurações do email que vai enviar para os outros
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'bootemailsender@gmail.com',
        pass: 'tauan198',
      },
    });

    const mailOptions = {
      from: sender,
      to: emailToSend,
      subject: subject,
      text: description,
    };

    await transporter.sendMail(mailOptions); // vai receber um objeto contendo as
  }
}
