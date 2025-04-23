import {  IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password:string;

}


