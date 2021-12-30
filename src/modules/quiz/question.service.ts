import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/CreateQuestionDto';
import { Question } from './question.entity';
import { QuestionRespository } from './question.repository';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
    constructor(
      @InjectRepository(QuestionRespository) private questionRespository: QuestionRespository,
      ){}
    
    async createQuestion(question: CreateQuestionDto, quiz: Quiz,): Promise<Question>{
      const newQuestion =  await this.questionRespository.save({
        question: question.question,
      });
      
      quiz.questions = [...quiz.questions, newQuestion];
      
      await quiz.save();

      return newQuestion;
  }
} 
