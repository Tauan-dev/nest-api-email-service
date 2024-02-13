import { IsString } from 'class-validator';

export class CreateEmailDTO {
  @IsString()
  readonly email: string;

  @IsString()
  readonly sender: string;

  @IsString()
  readonly subject: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly emailToSend: string;
}
