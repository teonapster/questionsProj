import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../questions.model';

@Component({
	selector: 'app-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
	numberAnswers: number[] = [];
	yesNoAnswers: string[] = [];
	multiSelectAnswers: any[] = [];
	selectAnswers: string[] = [];

	questions: Question[];
	questionsWithAnswers: any = [];

	constructor(private questionsService: QuestionsService) {
		this.questions = this.questionsService.getQuestions();
	}

	ngOnInit() {
		this.questionsService.myNumberSubject.subscribe(
			(newNumber) => {
				this.numberAnswers[newNumber.index] = newNumber.number;
			}
		)

		this.questionsService.myYesNoSubject.subscribe(
			(newValue) => {
				this.yesNoAnswers[newValue.index] = newValue.answer;
			}
		)

		this.questionsService.myMultySubject.subscribe(
			(newValues) => { 
				this.multiSelectAnswers[newValues.index] = newValues.answer;
			}
		)

		this.questionsService.mySelectSubject.subscribe(
			(newValue) => {
				this.selectAnswers[newValue.index] = newValue.answer;
			}
		)
	}

	onComplete(){
	
		if(this.questionsWithAnswers.length > 0){
			alert('You cant submit the form again!');
			return;
		}
	
		for(var i = 0; i < this.questions['questions'].length; i++){
			if(this.questions['questions'][i].type === 'number'){
				this.questionsWithAnswers.push({question: this.questions['questions'][i].text, answer: this.numberAnswers[i]});
			}
			if(this.questions['questions'][i].type  === 'yesno'){
				this.questionsWithAnswers.push({question: this.questions['questions'][i].text, answer: this.yesNoAnswers[i]})
			}
			if(this.questions['questions'][i].type === 'select'){
				this.questionsWithAnswers.push({question: this.questions['questions'][i].text, answer: this.selectAnswers[i]});
			}
			if(this.questions['questions'][i].type  == 'multiselect'){
				this.questionsWithAnswers.push( {question: this.questions['questions'][i].text, answer: this.multiSelectAnswers[i]})
			}
		}

		var cantFinish = 0;
		this.questionsWithAnswers.forEach(element => {
			if(!element.answer){
			 cantFinish++;
			}
			
		});
		if(cantFinish > 0){
			alert('You must answer all questions')
			this.questionsWithAnswers = [];
			return;
		}
		console.log(this.questionsWithAnswers);
		this.questionsService.getUsersAnswers(this.questionsWithAnswers);
		
	}
}
