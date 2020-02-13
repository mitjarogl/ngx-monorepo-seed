import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class RefreshTokenDto {

  @IsString()
  @ApiProperty({ required: true })
  readonly refreshToken: string;
}


