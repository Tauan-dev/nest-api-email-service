import { Injectable } from '@nestjs/common';
import { Email } from './entities/email.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmailDTO } from './dto/create-email.dto';
import { Repository } from 'typeorm';

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
}
