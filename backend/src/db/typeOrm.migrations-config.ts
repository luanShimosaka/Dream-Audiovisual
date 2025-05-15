import { ConfigService } from "@nestjs/config";
import { DataSourceOptions, DataSource } from "typeorm";
import { config } from "dotenv";

config()

const configService = new ConfigService()

const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: +(configService.get<number>('DB_PORT') ?? 3306),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: [],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false
}

export default new DataSource(dataSourceOptions)