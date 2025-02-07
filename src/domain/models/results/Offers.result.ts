import type Offer from './Offer.result'

export default interface Offers {
  jobs: Offer[]
  currentPage: number
  maxPage: number
}
