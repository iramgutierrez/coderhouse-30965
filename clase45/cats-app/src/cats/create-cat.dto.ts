import { ApiProperty } from '@nestjs/swagger';
import { Cat } from './cat.interface';

export class CreateCatDTO implements Cat {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly breed: string;
}
