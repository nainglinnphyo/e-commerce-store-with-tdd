import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { TypeORMTestingModule } from '../../test/TypeORMTestingModule';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeORMTestingModule([ProductEntity]),
        TypeOrmModule.forFeature([ProductEntity]),
      ],
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
