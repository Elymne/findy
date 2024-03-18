import { PageJobOffers } from "@src/domain/entities/pageJobOffers.entity"
import { SamplejobOffers } from "@src/domain/entities/sampleJobOffers.entity"
import { SamplejobOffersResponse } from "@src/infrastructure/datasources/jobOfferDatasource/models/SamplejobOffersResponse"
import axios from "axios"

export interface JobOfferDatasource {
    getSampleJobOffers(): Promise<SamplejobOffers>
    getJobOffersFromQuery(keywords: string, cityCode: string, radius: number): Promise<PageJobOffers>
}

export const JobOfferDatasourceImpl: JobOfferDatasource = {
    getSampleJobOffers: async function (): Promise<SamplejobOffers> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<SamplejobOffersResponse>(`${baseurl}/jobs/wttj/sample`, {
            timeout: 5000,
        })
        console.log(result)
        return result.data.data
    },
    getJobOffersFromQuery: function (keywords: string, cityCode: string, radius: number): Promise<PageJobOffers> {
        throw new Error("Function not implemented.")
    },
}
