import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberQuestionComponent } from './questions-Components/number-question/number-question.component';
import { SelectQuestionComponent } from './questions-Components/select-question/select-question.component';
import { MultiselectQuestionComponent } from './questions-Components/multiselect-question/multiselect-question.component';
import { YesnoQuestionComponent } from './questions-Components/yesno-question/yesno-question.component';
import { QuestionsService } from './questions.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberQuestionComponent,
    SelectQuestionComponent,
    MultiselectQuestionComponent,
    YesnoQuestionComponent,
    QuestionnaireComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
      ReactiveFormsModule
    
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
