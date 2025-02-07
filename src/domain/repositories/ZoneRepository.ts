import type Zone from '../models/results/Zone.result'

export default interface ZoneRepository {
  findManyByName(name: string): Promise<Zone[]>
  findOneByCode(code: string): Promise<Zone | null>
}
