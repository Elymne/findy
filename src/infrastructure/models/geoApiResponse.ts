export interface CityModel {
    nom: string
    code: string
}

export interface CityDetailedModel {
    nom: string
    code: string
    centre: {
        coordinates: number[]
    }
}
