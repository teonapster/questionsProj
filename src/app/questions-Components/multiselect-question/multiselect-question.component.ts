import { Component, OnInit, Input } from '@angular/core';
import { Options } from 'selenium-webdriver/firefox';
import { QuestionsService } from '../../questions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiselect-question',
  templateUrl: './multiselect-question.component.html',
  styleUrls: ['./multiselect-question.component.css']
})
export class MultiselectQuestionComponent implements OnInit {
  @Input() options: string[];
  @Input() max: number;;
  @Input() index: number;
  answer: string;
  multiSelectForm: FormGroup;
 isActive = false;
 isChecked = false;
  public answers: string[] = [];
  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
  }

  answerChanged(event: any) {
    this.answer = event.target.value;
    if(this.answers.indexOf(this.answer) !== -1){
      this.questionService.myMultySubject.next({ answer: this.answers, index: this.index })
      return;
    }    
    if (this.answers.length < 3) {
      this.answers.push(this.answer);
      this.questionService.myMultySubject.next({ answer: this.answers, index: this.index })
    } 
    if(this.answers.length === 3){
      this.isActive = true;
    }

  }

  onReset(){
    this.isActive = !this.isActive
    this.questionService.myMultySubject.next({answer : [],index: this.index});
    this.isChecked = null;
    this.answers = [];
  }

}
