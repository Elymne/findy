import { SourceSite } from "../../enums/sourceSite"

export default interface JobOffer {
    id?: string
    title: string
    imageUrl: string | null
    companyName: string
    companyLogoUrl: string | null
    cityName: string
    sourceUrl: string
    sourceData: SourceSite

    createdAt?: number
    updatedAt?: number
    createdWhile?: string
}
