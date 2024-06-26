import { IsOptional, IsInt, IsString } from "class-validator";

export class CreateAddressDto {

    @IsString()
    @IsOptional()
    complement: string;

    @IsInt()
    numberAddress: number;

    @IsString()
    cep: string;

    @IsInt()
    cityId: number;
}