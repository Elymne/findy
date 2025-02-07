import type Zone from '../models/results/Zone.result'

export interface CityRepository {
  findManyByName(name: string): Promise<Zone[]>
  findOneByCode(code: string): Promise<Zone | null>
}
