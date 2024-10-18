import { PartialType } from '@nestjs/mapped-types';
import { AccountDto } from './account.dto';
import { IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class FindAccountDto  {
    
    
    
    @IsOptional()
    @IsString()
    email?: string;
    @IsOptional()
    @IsString()
    name?:string;
    @IsOptional()
    @IsString()
    username?:string;
    

}
