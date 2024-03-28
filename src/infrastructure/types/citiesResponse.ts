import City from "@src/domain/entities/city/city.entity"

export default interface CitiesResponse {
    message: string
    data: City[]
}
