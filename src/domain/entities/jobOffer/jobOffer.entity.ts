import { SourceSite } from "../enums/sourceSite"

interface JobOffer {
    id?: string
    title: string
    imageUrl: string
    companyName: string
    companyLogoUrl: string
    cityName: string
    sourceUrl: string
    sourceData: SourceSite

    createdAt?: number
    updatedAt?: number
    createdWhile?: string
}

export default JobOffer
