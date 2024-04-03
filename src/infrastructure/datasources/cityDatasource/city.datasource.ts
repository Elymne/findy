import City, { CityDetailed } from "@src/domain/entities/city/city.entity"
import DatasourceResponse from "@src/infrastructure/models/datasourceResponse"
import axios from "axios"

export default interface CityDatasource {
    fetchAll(): Promise<City[]>
    fetchOneByName(name: string): Promise<CityDetailed>
    fetchOneByCode(code: string): Promise<CityDetailed>
}

export const CityDatasourceImpl: CityDatasource = {
    fetchAll: async function (): Promise<City[]> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<City[]>>(`${baseurl}/cities`, {
            timeout: 10000,
        })
        return result.data.data
    },
    fetchOneByName: async function (name: string): Promise<CityDetailed> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<CityDetailed>>(`${baseurl}/cities/name/${name}`, {
            timeout: 10000,
        })
        return result.data.data
    },
    fetchOneByCode: async function (code: string): Promise<CityDetailed> {
        const baseurl = process.env.NEXT_PUBLIC_API_URL
        const result = await axios.get<DatasourceResponse<CityDetailed>>(`${baseurl}/cities/code/${code}`, {
            timeout: 10000,
        })
        return result.data.data
    },
}
