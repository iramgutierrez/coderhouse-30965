import { Controller, Get, Post, Body } from '@nestjs/common';

import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDTO } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() payload: CreateCatDTO) {
    return this.catsService.create(payload);
  }
}
