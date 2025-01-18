import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'ivan@mail.ru' })
  @IsNotEmpty()
  readonly email: string;
}
