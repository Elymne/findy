import type SearchOffers from '../models/params/SearchOffers.param'
import type DetailedOffer from '../models/results/DetailedOffer.result'
import type Offer from '../models/results/Offer.result'

export default interface OfferRepository {
  findManyBySearch(search: SearchOffers): Promise<Offer[]>
  findOne(id: string): Promise<DetailedOffer | null>
}
