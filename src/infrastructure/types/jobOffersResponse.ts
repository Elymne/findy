import { JobOffer } from "@src/domain/entities/jobOffer/jobOffer.entity"

type jobOffersResponse = {
    message: string
    data: JobOffer[]
}

export default jobOffersResponse
