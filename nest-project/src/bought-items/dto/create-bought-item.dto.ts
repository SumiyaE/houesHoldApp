import { ApiProperty } from '@nestjs/swagger';

export class CreateBoughtItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  category: string;
}
