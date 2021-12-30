import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/CreateQuestionDto";
import { Question } from "./question.entity";
import { QuestionService } from './question.service';
import { QuizService } from "./quiz.service";

@Controller('question')
export class QuestionController{
    constructor(private questionService: QuestionService, private quizService: QuizService ){}

    @Post('add')
    @UsePipes(ValidationPipe)
    async addQuestion(@Body() question: CreateQuestionDto): Promise<Question>{
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz);
    }
}