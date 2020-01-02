import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


export class RefreshTokenDto {

  @IsString()
  @ApiModelProperty({ required: true })
  readonly refreshToken: string;
}


