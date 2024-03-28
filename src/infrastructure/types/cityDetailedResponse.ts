import { CityDetailed } from "@src/domain/entities/city/city.entity"

export default interface CityDetailedResponse {
    message: string
    data: CityDetailed
}
