import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionList: any;
  choices: boolean[] = [];

  constructor(private quizService: QuizService, private router: Router) { }
  ngOnInit() {
    this.quizService.getRandQues().subscribe(response => {
      this.questionList = response;
      console.log("Hi");
      console.log(this.questionList);
    })
  }
  onSelection(choice, answer, index) {
    if(choice === answer) {
      this.choices[index] = true;
    } else {
      this.choices[index] = false;
    }
    console.log(this.choices);
  }
  
  submitResult(form){
//  console.log(form.value);
    // this.quizService.addingScore(form,this.questionList);
    this.quizService.addingScore(form);
  }

}



