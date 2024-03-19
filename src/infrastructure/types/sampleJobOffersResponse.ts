import { JobOffer } from "@src/domain/entities/jobOffer/jobOffer.entity"

type SamplejobOffersResponse = {
    message: string
    data: {
        marketing: JobOffer[]
        communication: JobOffer[]
        comptability: JobOffer[]
        webDev: JobOffer[]
        humanResources: JobOffer[]
        commercial: JobOffer[]
    }
}

export default SamplejobOffersResponse
