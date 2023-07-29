import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { TypeORMTestingModule } from './TypeORMTestingModule';
import { User } from './../src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './../src/auth/auth.controller';
import { AuthService } from './../src/auth/auth.service';
import { UsersService } from './../src/users/users.service';

describe('AuthController (e2e)', () => {

    const authUrl = `http://localhost:3000/auth`;

    const mockUser: User = {
        username: 'nlp',
        email: "nlp@gmail.com",
        password: "nlp@gmail.com",
        id: 1,
        createdAt: undefined,
        updatedAt: undefined
    };

    describe("/auth/register (POST)", () => {
        it("it should register a user and return the new user object", () => {
            return request(authUrl)
                .post("/login")
                .set("Accept", "application/json")
                .send(mockUser)
                .expect((response: request.Response) => {
                    const {
                        id,
                        username,
                        email,
                        password
                    } = response.body;

                        expect(typeof id).toBe("number"),
                        expect(username).toEqual(mockUser.username),
                        expect(email).toEqual(mockUser.email),
                        expect(password).toBeUndefined();
                })
                .expect(HttpStatus.OK);
        });
    });
});