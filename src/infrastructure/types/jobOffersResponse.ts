import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"

export default interface jobOffersResponse {
    message: string
    data: JobOffer[]
}
