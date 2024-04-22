import City, { CityDetailed } from "@src/domain/entities/city/city.entity"
import { CityDetailedModel, CityModel } from "@src/infrastructure/models/geoApiResponse"
import axios from "axios"

export default interface CityDatasource {
    baseUrl: string | undefined
    fetchByName(name: string): Promise<City[]>
    fetchOneByCode(code: string): Promise<CityDetailed>
}

export const CityDatasourceImpl: CityDatasource = {
    baseUrl: process.env.NEXT_PUBLIC_GEO_API_URL,

    fetchByName: async function (name: string): Promise<City[]> {
        const axiosResponse = await axios.get<Array<CityModel>>(
            `${this.baseUrl}/communes?fields=centre&format=json&geometryQuery=centre&boost=population&limit=10&nom=${name}`,
            {
                timeout: 10000,
            }
        )

        return axiosResponse.data.map((model) => {
            return {
                name: model.nom,
                code: model.code,
            }
        })
    },

    fetchOneByCode: async function (code: string): Promise<CityDetailed> {
        const axiosResponse = await axios.get<CityDetailedModel>(
            `${this.baseUrl}/communes/${code}?fields=centre&format=json&geometryQuery=centre&boost=population&limit=10&nom=${name}`,
            {
                timeout: 10000,
            }
        )

        const cityDetailedModel = axiosResponse.data

        return {
            name: cityDetailedModel.nom,
            code: cityDetailedModel.code,
            coordinates: {
                lat: cityDetailedModel.centre.coordinates[0],
                lng: cityDetailedModel.centre.coordinates[1],
            },
        }
    },
}
