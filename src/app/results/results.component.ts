import { Component, OnInit, Output } from '@angular/core';
import { QuizService } from '../quiz.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  answers:any;
  name:string;
  questions: any;
  results: any;
  score:number;
  constructor(private quizService:QuizService) {
    // this.name = this.quizService.name;
    
  }

  ;
  
  ngOnInit() {
    this.score = this.quizService.getScores();
    this.questions = this.quizService.getQuestions();
    this.answers = this.quizService.getAnswers();
    }
}
  
  