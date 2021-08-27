import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HohoModule } from './hoho/hoho.module';
import { Hoho } from './hoho/entities/hoho.entity';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [Hoho],
      autoLoadEntities: true,
      synchronize: true,
      keepConnectionAlive: true,
      extra: {
        connectionLimit: 5,
        enableKeepAlive: true,
      },
    }),
    HohoModule,
    HealthCheckModule,
  ],
})
export class AppModule {}
