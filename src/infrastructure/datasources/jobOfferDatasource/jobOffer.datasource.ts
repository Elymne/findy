import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"
import PageJobOffers from "@src/domain/entities/jobOffer/pageJobOffers.entity"
import SamplejobOffers from "@src/domain/entities/jobOffer/sampleJobOffers.entity"
import DatasourceResponse from "@src/infrastructure/models/datasourceResponse"
import axios from "axios"

export default interface JobOfferDatasource {
    getSampleJobOffers(): Promise<SamplejobOffers>
    getJobOffersFromQuery(keywords: string, cityCode: string, radius: number, page: number): Promise<PageJobOffers>
}

export const JobOfferDatasourceImpl: JobOfferDatasource = {
    getSampleJobOffers: async function (): Promise<SamplejobOffers> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<SamplejobOffers>>(`${baseurl}/jobs/sample`, {
            timeout: 10000,
        })
        return result.data.data
    },

    getJobOffersFromQuery: async function (keywords: string, cityCode: string, radius: number, page: number): Promise<PageJobOffers> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<PageJobOffers>>(
            `${baseurl}/jobs?keywords=${keywords}&cityCode=${cityCode}&radius=${radius}&page=${page}`,
            {
                timeout: 10000,
            }
        )
        return result.data.data
    },
}
