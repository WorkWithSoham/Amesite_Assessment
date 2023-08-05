import {Component, EventEmitter, Output} from '@angular/core';
import {Question} from "../custom_types/info";
import {questionList} from "../utils/questions";

@Component({
    selector: 'app-assessment-page',
    templateUrl: './assessment-page.component.html',
    styleUrls: ['./assessment-page.component.css']
})
export class AssessmentPageComponent {

    @Output() getUserGradesEvent: EventEmitter<number> = new EventEmitter<number>();
    questionList: Question[] = questionList;
    finalGrade: number = 0.0;
    active: boolean = true

    calculateScore(ques: string, answer: string) {
        if (ques === answer) {
            this.finalGrade++;
        }
    }

    emitGrades() {
        this.getUserGradesEvent.emit(this.finalGrade)
    }

}
