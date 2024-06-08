import { StateEntity } from "../entity/state.entity";

export class ReturnStateDto {
    name: string;

    constructor(stateEntity: StateEntity) {
        this.name = stateEntity.name;
    }
}