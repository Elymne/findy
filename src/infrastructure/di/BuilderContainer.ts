import { ApiGeoDatasource } from '../datasources/remote/ApiGeoDatasource'
import { FranceTravailDatasource } from '../datasources/remote/FranceTravailDatasource'
import { Container } from './Container'
import { IName } from './IName'

export function buildContainer() {
  buildRepositories()
  buildUsecases()
}

function buildRepositories(): void {
  Container.add(IName.ZoneRepository, () => {
    return ApiGeoDatasource
  })

  Container.add(IName.OfferRepository, () => {
    return FranceTravailDatasource
  })
}

function buildUsecases(): void {
  console.log('Not implemented yet…')
}
