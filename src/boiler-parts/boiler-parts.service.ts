import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BoilerParts } from './boiler-parts.models';
import { IBoilerPartsQuery } from './types';
import { Op } from 'sequelize';

@Injectable()
export class BoilerPartsService {
  constructor(
    @InjectModel(BoilerParts)
    private boilerPartsModal: typeof BoilerParts,
  ) {}

  async paginateAndFilter(
    query: IBoilerPartsQuery,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    const limit = Number(query.limit);
    const offset = Number(query.offset) * 20;
    return this.boilerPartsModal.findAndCountAll({ limit, offset });
  }

  async bestsellers(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModal.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModal.findAndCountAll({ where: { new: true } });
  }

  async findOne(id: number): Promise<BoilerParts> {
    return this.boilerPartsModal.findOne({ where: { id } });
  }

  async findOneByName(name: string): Promise<BoilerParts> {
    return this.boilerPartsModal.findOne({ where: { name } });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModal.findAndCountAll({
      where: { name: { [Op.like]: `%${str}%` } },
      limit: 20,
    });
  }
}
