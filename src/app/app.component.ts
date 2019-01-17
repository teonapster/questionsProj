import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Question, NumQuestion, MultiSelectQuestion, SelectQuestion, YesNo } from './questions.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  questions: Question[];


  constructor(private questionsService: QuestionsService){
    this.questions = this.questionsService.getQuestions();
   }

  consoleLogQuestions(){
    console.log(this.questions);
  }

  


}
