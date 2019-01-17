import { Injectable, OnInit } from '@angular/core';
import { Question } from './questions.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questionsJson;
  private userAnswers;
  myNumberSubject = new Subject<{number:number, index:number}>();
  myYesNoSubject = new Subject<{answer: string, index:number}>();
  myMultySubject = new Subject<{answer:string[],index: number}>();
  mySelectSubject = new Subject<{answer:string,index: number}>();

  constructor() {
    this.initQuestions()
   }

  initQuestions(){
    this.questionsJson = {
      questions:[
        {type:'number', text:"What's your age?",min: 0, max: 100},

        {type:'select', text:"Where do you live?", options: [
          'Thessaloniki','Athens','Patra','Serres','Kozani'
        ]},

        {type:'multiselect',text:'Select up to three hobbies that you enjoy',option: [
          'Footbal','Gaming','Canoe Kayak','Basketball','Puzzle games'
        ], max: 3},

        {type:'yesno',text:'Are you planning to buy a car soon'},
      

 
      ]
    }

  }

  getQuestions(){
    return this.questionsJson;
  }

  getUsersAnswers(allData: any){
    this.userAnswers = allData;
    }

}
