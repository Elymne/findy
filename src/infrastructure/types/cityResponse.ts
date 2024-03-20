import City from "@src/domain/entities/city/city.entity"

type CityResponse = {
    message: string
    data: City[]
}

export default CityResponse
