import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: process.env.DB_DATABASE,
      host: process.env.DV_HOST,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      port: Number(process.env.DB_PORT),
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/*{.ts,*.js}`],
      migrationsRun: true
    }),
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
