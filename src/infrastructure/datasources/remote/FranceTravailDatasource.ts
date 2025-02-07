import type SearchOffers from '@/domain/models/params/SearchOffers.param'
import type DetailedOffer from '@/domain/models/results/DetailedOffer.result'
import type Offer from '@/domain/models/results/Offer.result'
import type OfferRepository from '@/domain/repositories/OfferRepository'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const baseUrl = 'https://api.francetravail.io/partenaire/offresdemploi'

interface FranceTravailModel {
  id: string
  intitule: string
  description: string
  entreprise: {
    nom: string
    logo: string
  }
  lieuTravail: {
    libelle: string
  }
  appellationlibelle: string
  dateCreation: string
  dateActualisation: string
}

interface FranceTravailDetailedModel {
  id: string
  intitule: string
  description: string
  entreprise: {
    nom: string
    logo: string
  }
  lieuTravail: {
    libelle: string
  }
  appellationlibelle: string
  dateCreation: string
  dateActualisation: string
}

interface SearchParams {
  motsCles: string
  commune: string
  distance: number | null
}

export const FranceTravailDatasource: OfferRepository = {
  findManyBySearch: async function (search: SearchOffers): Promise<Offer[]> {
    const url = `${baseUrl}/v2/offres/search`
    const options: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${import.meta.env.VUE_APP_FRANCE_TRAVAIL_API_KEY}`,
        Accept: 'application/json',
      },
      params: {
        motsCles: search.keyWords,
        commune: search.codeZone,
        distance: search.distance,
      } as SearchParams,
    }

    const response = await axios.get<FranceTravailModel[]>(url, options)

    return response.data.map((data) => {
      return {
        id: data.id,
        title: data.intitule,
        description: data.description,
        company: data.entreprise.nom,
        companyLogo: data.entreprise.logo,
        zone: data.lieuTravail.libelle,
        jobTitle: data.appellationlibelle,
        createdAt: new Date(data.dateCreation),
        updateAt: new Date(data.dateActualisation),
        imgUrl: null,

        tags: [],
      }
    })
  },

  findOne: async function (id: string): Promise<DetailedOffer | null> {
    const url = `${baseUrl}/v2/offres/${id}`
    const options: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${import.meta.env.VUE_APP_FRANCE_TRAVAIL_API_KEY}`,
        Accept: 'application/json',
      },
    }

    const response = await axios.get<FranceTravailDetailedModel>(url, options)

    if (response.status == 204) {
      return null
    }

    return null
  },
}
