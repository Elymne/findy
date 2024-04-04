import JobOffer from "./jobOffer.entity"

export default interface PageJobOffers {
    totalPagesNb: number
    jobOffers: JobOffer[]
}
