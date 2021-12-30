import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    //Validations from class-validator
    @IsNotEmpty({message: "Title cannot be empty"})
    @Length(3, 100)
    //First expected field in the body of the request
    title: string;

    //Validations for second field in the body of the request
    @IsNotEmpty({message: "Please add a description"})
    @Length(3)
    //Second expected field in the body
    description: string;
}