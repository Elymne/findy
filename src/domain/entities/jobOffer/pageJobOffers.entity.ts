import JobOffer from "./jobOffer.entity"

export default interface PageJobOffers {
    maxPage: number
    jobOffers: JobOffer[]
}
