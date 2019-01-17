export interface Question{
    type: string;
    text: string;
}

export interface NumQuestion extends Question {
    min: number;
    max: number;
}

export interface SelectQuestion extends Question{
    options: string[];
}
 export interface MultiSelectQuestion extends Question{
     option: string[];
     max: number;
 }

 export interface YesNo extends Question{
     
 }

