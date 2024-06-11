import { ReturnUserDto } from "src/user/dtos/returnUser.dtos";

export interface ReturnLoginDto{
    access_token:string;
    user: ReturnUserDto;
}