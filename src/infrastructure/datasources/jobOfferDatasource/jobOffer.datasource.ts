import { PageJobOffers } from "@src/domain/entities/responses/pageJobOffers.entity"
import { SamplejobOffers } from "@src/domain/entities/responses/sampleJobOffers.entity"
import jobOffersResponse from "@src/infrastructure/types/jobOffersResponse"
import SamplejobOffersResponse from "@src/infrastructure/types/sampleJobOffersResponse"
import axios from "axios"

export interface JobOfferDatasource {
    getSampleJobOffers(): Promise<SamplejobOffers>
    getJobOffersFromQuery(keywords: string, cityCode: string, radius: number, page: number): Promise<PageJobOffers>
}

export const JobOfferDatasourceImpl: JobOfferDatasource = {
    getSampleJobOffers: async function (): Promise<SamplejobOffers> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<SamplejobOffersResponse>(`${baseurl}/jobs/wttj/sample`, {
            timeout: 5000,
        })
        return result.data.data
    },

    getJobOffersFromQuery: async function (keywords: string, cityCode: string, radius: number, page: number): Promise<PageJobOffers> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<jobOffersResponse>(
            `${baseurl}/jobs/wttj?keywords=${keywords}&cityCode=${cityCode}&radius=${radius}&page=${page}`,
            {
                timeout: 5000,
            }
        )
        return {
            jobOffers: result.data.data,
            maxPage: 1,
        }
    },
}
