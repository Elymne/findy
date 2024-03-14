import { JobOffer } from "@src/domain/entities/jobOffer/jobOffer.entity"

export interface SamplejobOffersResponse {
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
