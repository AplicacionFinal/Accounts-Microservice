import { Result } from './../../node_modules/nats/lib/nats-base-client/util.d';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Account } from "./entities/account.entity";
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountDto } from './dto/account.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { measureMemory } from 'vm';
import { FindAccountDto } from './dto/find-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern({cmd: 'register_account'})
  register(@Payload() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @MessagePattern({cmd: 'find_account'})
  find(@Payload() findAccountDto:FindAccountDto){
    console.log(findAccountDto);
    
    return this.accountService.find(findAccountDto);
  }

  @MessagePattern({cmd: 'exits_account'})
  exits(@Payload() findAccountDto:FindAccountDto){
    
    return this.accountService.find(findAccountDto).then(
      (result) => {
        console.log(result);
          if(result != null) return {success:1};
          else return {success:0};
      },
      (error) =>{
        throw error;
      }
    );
    
    
  }



  

  
}
