import { IsNumber, IsString } from 'class-validator';

export class CreateEmailDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly sender: string;

  @IsString()
  readonly subject: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly emailToSend: string;
}
