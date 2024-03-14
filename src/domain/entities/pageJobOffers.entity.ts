import { JobOffer } from "./jobOffer/jobOffer.entity"

export interface PageJobOffers {
    page: number
    jobOffers: JobOffer[]
}
