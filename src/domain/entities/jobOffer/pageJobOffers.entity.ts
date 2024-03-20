import JobOffer from "./jobOffer.entity"

interface PageJobOffers {
    maxPage: number
    jobOffers: JobOffer[]
}

export default PageJobOffers
