import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { } from 'protractor';
import { QuestionsService } from '../../questions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-number-question',
    templateUrl: './number-question.component.html',
    styleUrls: ['./number-question.component.css']
})
export class NumberQuestionComponent implements OnInit {
    numberGroup: FormGroup;
    @Input() min: number;
    @Input() max: number;
    @Input() index: number;
    hasValidAnswer: boolean
    constructor(private questionsService: QuestionsService) { }

    change() {
    }

    ngOnInit() {
        this.numberGroup = new FormGroup({
            answer: new FormControl(null, [Validators.required, this.biggerThanMax.bind(this), this.smallerThanMin.bind(this)])
        })

        this.numberGroup.valueChanges.subscribe(
            (value) => {
                if (value.answer > this.max || value.answer < this.min) {
                    this.questionsService.myNumberSubject.next({ number: null, index: this.index });
                } else {
                    this.questionsService.myNumberSubject.next({ number: value.answer, index: this.index });
                }

            }
        )
    }

    biggerThanMax(control: FormControl): { [s: string]: boolean } {
        if (control.value > this.max) {
            return { 'valueIsBigger': true }
        }
        return null;
    }

    smallerThanMin(control: FormControl): { [s: string]: boolean } {
        if (control.value < this.min) {
            return { 'valueIsSmaller': true }
        }
        return null;
    }

}
