import {  IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(15)
    mobile: string;
    
    @IsNotEmpty()
    @IsString()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password:string;

}


