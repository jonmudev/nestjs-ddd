import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  age: number;
}
