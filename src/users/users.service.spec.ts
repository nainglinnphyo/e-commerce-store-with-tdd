import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TypeORMTestingModule } from '../../test/TypeORMTestingModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeORMTestingModule([User]),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UsersService, JwtService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const result: any = {};
      const email = 'nlp@gmail.com'
      jest.spyOn(service, 'findOne').mockImplementation(() => result);
      expect(await service.findOne(email)).toBe(result);
    });
  })
});
