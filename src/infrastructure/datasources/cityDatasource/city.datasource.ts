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
        if (name == "") {
            throw Error(`Can't use an empty string for name param`)
        }

        const axiosResponse = await axios.get<Array<CityModel>>(`${this.baseUrl}/communes`, {
            params: {
                fields: "centre",
                format: "json",
                geometryQuery: "centre",
                boost: "population",
                limit: "10",
                nom: name,
            },
            timeout: 10000,
        })

        return axiosResponse.data.map((model) => {
            return {
                name: model.nom,
                code: model.code,
            }
        })
    },

    fetchOneByCode: async function (code: string): Promise<CityDetailed> {
        if (code == "") {
            throw Error(`Can't use an empty string for code param.`)
        }

        const axiosResponse = await axios.get<CityDetailedModel>(`${this.baseUrl}/communes/${code}`, {
            params: {
                fields: "centre",
                format: "json",
                geometryQuery: "centre",
                boost: "population",
                limit: "1",
                nom: code,
            },
            timeout: 10000,
        })

        return {
            name: axiosResponse.data.nom,
            code: axiosResponse.data.code,
            coordinates: {
                lat: axiosResponse.data.centre.coordinates[0],
                lng: axiosResponse.data.centre.coordinates[1],
            },
        }
    },
}
