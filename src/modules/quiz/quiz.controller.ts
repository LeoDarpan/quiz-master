import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuizDto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getQuiz(): string {
    return this.quizService.getQuiz();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto){
    return await this.quizService.createNewQuiz(quizData);
  }
}
