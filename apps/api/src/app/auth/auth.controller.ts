import {
  Body,
  Controller,
  ForbiddenException,
  NotImplementedException,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { LoginDto } from './dtos/login.dto';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@ApiBearerAuth()
@ApiUseTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService,
  ) {
  }

  @Post()
  async login(@Body() body: LoginDto, @Req() req) {
    // const hasClientHeader = Object.keys(req.headers).indexOf('client') !== -1;
    // if (!hasClientHeader) {
    //   throw new ForbiddenException('Missing headers');
    // }

    const authUser = await this.authService.login(body.email, body.password) as any;
    if (!authUser) {
      throw new ForbiddenException('Invalid credentials');
    }


    return {
      accessToken: await this.authService.createAccessToken(authUser),
      refreshToken: await this.authService.createRefreshToken(authUser),
      id: authUser.id,
      email: authUser.email,
      firstname: authUser.firstname,
      lastname: authUser.lastname,
    };
  }


  @Post('tokens')
  async refreshToken(@Req() req, @Body() body: RefreshTokenDto): Promise<unknown> {
    if (!body.refreshToken) {
      throw new UnauthorizedException('Token must be provided');
    }

    try {
      const token = await this.authService.checkToken(body.refreshToken);
      const authUser = await this.authService.findById(token.id);
      if (!authUser) {
        throw new ForbiddenException('User does not exist');
      }
      return {
        accessToken: await this.authService.createAccessToken(authUser),
        refreshToken: await this.authService.createRefreshToken(authUser),
        id: authUser.id,
        email: authUser.email,
        firstname: authUser.firstname,
        lastname: authUser.lastname,
      };

    } catch (e) {
      throw new ForbiddenException('Token has expired or invalid');
    }
  }


  @Post('logout')
  async logout(@Body() body: { refreshToken }): Promise<unknown> {
    // Remove session from a user
    throw new NotImplementedException();
  }
}
