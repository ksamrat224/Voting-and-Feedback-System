import { IsInt, IsNotEmpty } from "class-validator";

export class CreateVoteDto {
    @IsInt()
    @IsNotEmpty()
    userId:number;
    
    @IsInt()
    @IsNotEmpty()
    pollOptionId:number;
}
