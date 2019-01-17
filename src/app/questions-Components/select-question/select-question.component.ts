import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../../questions.service';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.css']
})
export class SelectQuestionComponent implements OnInit {
@Input() options;
@Input() index;
selected: string;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  }

  selectedValue(event: any){
    this.selected = event.target.value;
    this.questionsService.mySelectSubject.next({answer: this.selected, index: this.index});
  }

}
