import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientJwtStrategy extends PassportStrategy(Strategy, 'clientJwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: environment.jwtSecret,
    });
  }

  async validate(payload: { client }, done: Function) {
    // TODO Handler for validating different clients
    done(null, true);
  }
}
