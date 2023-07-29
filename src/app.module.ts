import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "ecommerce.sqlite",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
