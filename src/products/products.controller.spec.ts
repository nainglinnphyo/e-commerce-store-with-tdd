import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductEntity } from './entities/product.entity';
import { TypeORMTestingModule } from '../../test/TypeORMTestingModule';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeORMTestingModule([ProductEntity]),
        TypeOrmModule.forFeature([ProductEntity]),
      ],
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
