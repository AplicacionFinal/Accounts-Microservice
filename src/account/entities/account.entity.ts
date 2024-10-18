import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

@Schema()
export class Account extends Document {

    @Prop({unique:true,required:true})
    email: string;
    @Prop({required:true})
    name:string;
    @Prop({unique:true,required:true})
    username:string;
    @Prop({minlength:6})
    password:string;
    @Prop({type:Number,default:0})
    dinero: number;


}


export const AccountSchema = SchemaFactory.createForClass(Account);
