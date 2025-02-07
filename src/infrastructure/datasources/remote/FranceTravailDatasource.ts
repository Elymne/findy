import type SearchOffers from '@/domain/models/params/SearchOffers.param'
import type DetailedOffer from '@/domain/models/results/DetailedOffer.result'
import type Offer from '@/domain/models/results/Offer.result'
import type OfferRepository from '@/domain/repositories/OfferRepository'

const baseUrl = 'https://api.francetravail.io/partenaire/offresdemploi'

interface FranceTravailModel {
  title: string
}

export const FranceTravailDatasource: OfferRepository = {
  findManyBySearch: function (search: SearchOffers): Offer[] {
    throw new Error('Function not implemented.')
  },
  findOne: function (id: string): DetailedOffer | null {
    throw new Error('Function not implemented.')
  },
}
