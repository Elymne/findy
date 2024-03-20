import { City } from "../../domain/entities/city/city.entity"

type CityResponse = {
    message: string
    cities: City[]
}

export default CityResponse
