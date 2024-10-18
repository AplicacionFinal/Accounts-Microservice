import 'dotenv/config';

import * as joi from 'joi';


const evnSchema = joi.object({
    PORT: joi.number(),
    DB_URL: joi.string().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
}).unknown(true);

// console.log(`El valor de la constante PORT es ${process.env.PORT}`);
// console.log(`El valor de la constante NATS_SERVERS es `);
// console.log(process.env.NATS_SERVERS.split(','));

const {error,value:envVars} = evnSchema.validate({...process.env,NATS_SERVERS: process.env.NATS_SERVERS.split(',')}); //

if(error) throw new Error(`ConfigValidationError: ${error.message}`);

export const envs = {
    PORT: envVars.PORT,
    DB_URL: envVars.DB_URL,
    NATS_SERVERS:envVars.NATS_SERVERS,
}