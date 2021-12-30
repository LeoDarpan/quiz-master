import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto{
    //Validations for the question column
    @IsNotEmpty({message: 'Question cannot be empty'})
    @Length(3, 1000)
    //Column name
    question: string;

    @IsNotEmpty()
    quizId: number;
}