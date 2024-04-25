import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"
import PageJobOffers from "@src/domain/entities/jobOffer/pageJobOffers.entity"
import { JobCategEnum } from "@src/domain/enums/jobOfferCategory"
import DatasourceResponse from "@src/infrastructure/models/datasourceResponse"
import axios from "axios"

export default interface JobOfferDatasource {
    getSampleJobOffers(categ: JobCategEnum): Promise<JobOffer[]>
    getJobOffersFromQuery(keywords: string, cityCode: string, radius: number, page: number): Promise<PageJobOffers>
}

export const JobOfferDatasourceImpl: JobOfferDatasource = {
    getSampleJobOffers: async function (categ: JobCategEnum): Promise<JobOffer[]> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<JobOffer[]>>(`${baseurl}/jobs/sample`, {
            timeout: 10000,
            params: {
                categ: categ,
            },
        })
        return result.data.data
    },

    getJobOffersFromQuery: async function (keywords: string, cityCode: string, radius: number, page: number): Promise<PageJobOffers> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<PageJobOffers>>(`${baseurl}/jobs`, {
            params: {
                keywords: keywords,
                cityCode: cityCode,
                radius: radius,
                page: page,
            },
            timeout: 10000,
        })
        return result.data.data
    },
}
