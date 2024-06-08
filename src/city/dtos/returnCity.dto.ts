import { CityEntity } from "../entity/city.entity";
import { ReturnStateDto } from "src/state/dtos/returnStade.dto";

export class ReturnCityDto {
    name: string;
    state?: ReturnStateDto;

    constructor(city: CityEntity) {
        this.name = city.name;
        this.state = city.state ? new ReturnStateDto(city.state) : undefined;
    }
}