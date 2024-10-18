import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { envs } from './config/envs';

@Module({
  imports: [AccountModule,MongooseModule.forRoot(envs.DB_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
