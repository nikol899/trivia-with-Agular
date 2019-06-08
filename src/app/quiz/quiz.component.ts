import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Router } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionList:any;
  radioSel:any;
  answers:any[]=[]
  radioSelected:string;
  constructor(private quizService:QuizService,private router:Router) { }
  ngOnInit() {
    this.quizService.getRandQues().subscribe(response=>{
      this.questionList =response;
      console.log(this.questionList);
    })
   }
 checkAnswer(i){
if(this.questionList.choice[i].value == this.questionList.answer[i].value){
    console.log("yes");
  }

 }

}
