import { JwtService } from '@nestjs/jwt';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt.interface';
import { environment } from '../../environments/environment';
import { User } from '@nx/core';

@Injectable()
export class AuthService {

  constructor(private readonly jwtService: JwtService) {
  }

  async createAccessToken(payload: User): Promise<unknown> {
    const tokenPayload: JwtPayload = {
      id: payload.id,
      name: payload.firstname + ' ' + payload.lastname,
      email: payload.email,
    };
    return this.jwtService.sign(tokenPayload);
  }


  async createRefreshToken(user: User): Promise<string> {
    const tokenPayload = {
      id: user.id,
    };
    return this.jwtService.sign(tokenPayload, { expiresIn: environment.refreshTokenExpirationTime });
  }


  checkToken(token: string): Promise<any> {
    return this.jwtService.verify(token);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // Check role here
    // const user = await this.userService.findByEmail(payload.email);
    // if (!user) {
    //     return false;
    // }

    return {};
  }

  async login(email: string = '', password: string): Promise<User> {
    // Call to Db
    return { id: 1, firstname: 'John', lastname: 'Doe' } as any;
  }

  async logout(userId: string, refreshToken: string): Promise<unknown> {
    // TODO Remove user token entry from db.
    throw new NotImplementedException();
  }

  async saveRefreshToken(refreshToken: string, userId: string, expiresAt: Date): Promise<unknown> {
    // TODO save refresh token
    throw new NotImplementedException();
  }

  async invalidateOldTokens(refreshToken: string): Promise<unknown> {
    // TODO Invalidate old refresh token
    throw new NotImplementedException();
  }

  async checkRefreshToken(token: string): Promise<unknown> {
    // TODO Check if token exists in db
    // await this.redisService.getClient().set('asd', 'Muuu');
    // const foo = await this.redisService.getClient().get('asd');
    // console.log(foo);
    // return null;
    throw new NotImplementedException();
  }

  async findById(id: any): Promise<User> {
    // Call to Db
    return { id: 1, firstname: 'John', lastname: 'Doe' } as any;
  }
}
