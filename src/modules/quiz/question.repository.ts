import { EntityRepository, Repository } from "typeorm";
import { Question } from "./question.entity";



@EntityRepository(Question)
export class QuestionRespository extends Repository<Question>{

}