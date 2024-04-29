import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"
import PageJobOffers from "@src/domain/entities/jobOffer/pageJobOffers.entity"
import JobCategory from "@src/domain/enums/jobOfferCategory"
import DatasourceResponse from "@src/infrastructure/models/datasourceResponse"
import axios from "axios"

export default interface JobOfferDatasource {
    getJobOffersSample(categ: JobCategory): Promise<JobOffer[]>
    getJobOffersFromQuery(keywords: string, cityCode: string, radius: number, page: number): Promise<PageJobOffers>
}

export const JobOfferDatasourceImpl: JobOfferDatasource = {
    getJobOffersSample: async function (categ: JobCategory): Promise<JobOffer[]> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<JobOffer[]>>(`${baseurl}/jobs/sample`, {
            timeout: 10000,
            params: {
                categ: categ,
            },
        })
        return result.data.data.slice(0, 5)
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
