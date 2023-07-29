import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TypeORMTestingModule } from '../../test/TypeORMTestingModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeORMTestingModule([]),
        TypeOrmModule.forFeature([]),
      ],
      providers: [UsersService, JwtService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
