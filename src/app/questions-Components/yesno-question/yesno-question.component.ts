import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../../questions.service';

@Component({
  selector: 'app-yesno-question',
  templateUrl: './yesno-question.component.html',
  styleUrls: ['./yesno-question.component.css']
})
export class YesnoQuestionComponent implements OnInit {
  @Input() index: number;
  answer: string;
  answers: string[] = ["Yes", "No"]
  constructor(private questionsService: QuestionsService) { }
 
  ngOnInit() {
  }

  radioChangeHandler(event: any){
    this.answer = event.target.value;   
    this.questionsService.myYesNoSubject.next({answer: this.answer,index: this.index });
  }

}
