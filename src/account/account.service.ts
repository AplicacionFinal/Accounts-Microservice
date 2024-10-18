import { Model } from 'mongoose';
import { FindAccountDto } from "./dto/find-account.dto";
import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountDto } from './dto/account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './entities/account.entity';
import { RpcException } from '@nestjs/microservices';


@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) { }

  async create(createAccountDto: CreateAccountDto) {
    try {

      const newAccount = new this.accountModel(createAccountDto);
      await newAccount.save();

      return { success: 1 };
    } catch (error) {
      return { success: 0 }
      throw new RpcException(`Error al crear la cuenta\n ${error.message}`);
    }
  }

  find(findAccountDto: FindAccountDto): Promise<CreateAccountDto> {

    
    
    return this.accountModel.findOne(findAccountDto).select('-password').exec();


  }



  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
