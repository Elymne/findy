import type Zone from '@/domain/models/results/Zone.result'
import type { CityRepository } from '@/domain/repositories/CityRepository'
import axios, { type AxiosRequestConfig } from 'axios'

const baseUrl = 'https://geo.api.gouv.fr'

interface GeoApiModel {
  nom: string
  code: string
  centre: {
    type: string
    coordinates: number[]
  }
}

export const ApiGeoDatasource: CityRepository = {
  findManyByName: async function (name: string): Promise<Zone[]> {
    const url = `${baseUrl}/communes`
    const options: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
      },
      params: {
        fields: 'centre',
        format: 'json',
        geometry: 'centre',
        boost: 'population',
        limitQuery: '10',
        nom: name,
      },
    }

    const response = await axios.get<GeoApiModel[]>(url, options)

    return response.data.map((data) => {
      return {
        name: data.nom,
        postalCode: data.code,
        lng: data.centre.coordinates[0],
        lat: data.centre.coordinates[1],
      }
    })
  },

  findOneByCode: async function (code: string): Promise<Zone | null> {
    const url = `${baseUrl}/communes/${code}`
    const options: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
      },
      params: {
        fields: 'centre',
        format: 'json',
        geometry: 'centre',
        boost: 'population',
        limitQuery: '1',
      },
    }

    const response = await axios.get<GeoApiModel | undefined>(url, options)

    if (response.data == undefined) {
      return null
    }

    return {
      name: response.data.nom,
      postalCode: response.data.code,
      lng: response.data.centre.coordinates[0],
      lat: response.data.centre.coordinates[1],
    }
  },
}
