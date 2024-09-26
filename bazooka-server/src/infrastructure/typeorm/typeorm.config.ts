// typeorm.config.ts
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
require('dotenv').config();

const envFilePath = process.env.NODE_ENV==="production" ? "./dev-env/prod.env" : './dev-env/local.env'
const migrations_path = process.env.NODE_ENV==="production" ? "prod-migrations" : 'migrations'

console.log(process.env.NODE_ENV)
console.log("envfilepath: ",envFilePath);

config({ path: envFilePath });
const configService = new ConfigService();
export default new DataSource({
  type: 'postgres',
  url: configService.get<string>('DB_CONNECTION_URL'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [`dist/${migrations_path}/*.js`],
});
