import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  getRandQues(){
    return this.http.get("/questions",{responseType:"json"});
}
  getScore(){
    return this.http.get("/scores",{responseType:"json"});
  }
  addScore(){
    return this.http.post("/scores",{responseType:"json"});
  }
}