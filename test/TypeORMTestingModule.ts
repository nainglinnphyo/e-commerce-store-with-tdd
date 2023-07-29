import { TypeOrmModule } from '@nestjs/typeorm';

export const TypeORMTestingModule = (entities: any[]) =>
    TypeOrmModule.forRoot({
        type: "sqlite",
        database: "ecommerce.sqlite",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true
    });