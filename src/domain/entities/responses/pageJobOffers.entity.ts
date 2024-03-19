import { JobOffer } from "../jobOffer/jobOffer.entity"

export interface PageJobOffers {
    maxPage: number
    jobOffers: JobOffer[]
}
