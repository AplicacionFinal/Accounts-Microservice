import { PartialType } from '@nestjs/mapped-types';
import { AccountDto } from './account.dto';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateAccountDto extends PartialType(AccountDto) {
    
    
    @IsString()
    email: string;
    @IsString()
    name:string;
    @IsString()
    username:string;
    @IsString()
    password:string;

}
