import City, { CityDetailed } from "@src/domain/entities/city/city.entity"
import CitiesResponse from "@src/infrastructure/types/citiesResponse"
import CityDetailedResponse from "@src/infrastructure/types/cityDetailedResponse"
import axios from "axios"

export interface CityDatasource {
    fetchAll(): Promise<City[]>
    fetchOneByName(name: string): Promise<CityDetailed>
    fetchOneByCode(code: string): Promise<CityDetailed>
}

export const CityDatasourceImpl: CityDatasource = {
    fetchAll: async function (): Promise<City[]> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<CitiesResponse>(`${baseurl}/cities`, {
            timeout: 10000,
        })
        return result.data.data
    },
    fetchOneByName: async function (name: string): Promise<CityDetailed> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<CityDetailedResponse>(`${baseurl}/cities/name/${name}`, {
            timeout: 10000,
        })
        return result.data.data
    },
    fetchOneByCode: async function (code: string): Promise<CityDetailed> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<CityDetailedResponse>(`${baseurl}/cities/code/${code}`, {
            timeout: 10000,
        })
        return result.data.data
    },
}
