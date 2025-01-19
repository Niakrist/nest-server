import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticateGuard } from 'src/auth/authenticated.guard';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}

  @UseGuards(AuthenticateGuard)
  @Get('')
  paginateAndFilter(@Query() query) {
    return this.boilerPartsService.paginateAndFilter(query);
  }

  @UseGuards(AuthenticateGuard)
  @Get('best')
  getBestsellers() {
    return this.boilerPartsService.bestsellers();
  }

  @UseGuards(AuthenticateGuard)
  @Get('new')
  getNew() {
    return this.boilerPartsService.new();
  }

  @UseGuards(AuthenticateGuard)
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.boilerPartsService.findOne(Number(id));
  }

  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.boilerPartsService.searchByString(search);
  }

  @Post('name')
  getByName(@Body() { name }: { name: string }) {
    return this.boilerPartsService.findOneByName(name);
  }
}
