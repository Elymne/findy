import City from "@src/domain/entities/city/city.entity"
import CityResponse from "@src/infrastructure/types/cityResponse"
import axios from "axios"

export interface CityDatasource {
    fetchAll(): Promise<City[]>
}

export const CityDatasourceImpl: CityDatasource = {
    fetchAll: async function (): Promise<City[]> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL

        console.log(`${baseurl}/cities`)

        const result = await axios.get<CityResponse>(`${baseurl}/cities`, {
            timeout: 10000,
        })
        return result.data.data
    },
}
