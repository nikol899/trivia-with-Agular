import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import{QuizService} from './quiz.service';
import{RouterModule, Routes} from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { ScoresComponent } from './scores/scores.component';

const appRoutes: Routes =[
  //redirects to ""-> quiz path
  {path:"",redirectTo:"/quiz",pathMatch:"full"},
  // "quiz"->QuizComponent
  { path:"quiz",component: QuizComponent},
  //"result ->"ResultsCompoent
  {path: "results", component: ResultsComponent},
  //"scores" ->"Scores Component"
  {path:"scores", component:ScoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
