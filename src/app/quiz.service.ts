import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  score = 0;
answers:any[]=[];
questions: any;

  constructor(private http: HttpClient, private router: Router) { }
  getRandQues() {
    return this.http.get("/questions", { responseType: "json" });
  }
  getScore() {
    return this.http.get("/scores", { responseType: "json" });
  }
  addScore(score) {
    console.log(score)
    return this.http.post("/scores",score,{ responseType: "json" });
  }
  getScores():any {
    return this.score;
  }
  getQuestions(){
    return this.questions;
  }
  getAnswers(){
    return this.answers;
  }

  addingScore(form, questions) {
    this.answers=form.value;
    this.questions = questions;
    // let answers = Object.values(form.value);
    for (let i = 0; i < this.answers.length; i++) {
      if (this.answers[i] === questions[i].answer) {
        this.score++;
      }
    }
    console.log(this.score);
    console.log(this.answers);
    this.router.navigate(["/results"]);
  }
}
