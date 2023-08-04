import {Component} from '@angular/core';
import {BasicUserInfo, CompleteUserInfo} from "./custom_types/info";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'AmesiteAssessment';
    infoProvided: boolean = false;
    assessmentComplete: boolean = false;

    userInfo: CompleteUserInfo = {
        email: "",
        name: "",
        grade: 0
    }

    storeUserData(userData: BasicUserInfo) {
        if (userData.email && userData.name) {
            this.userInfo.email = userData.email
            this.userInfo.name = userData.name
            this.infoProvided = true;
        }
    }

    getUserGrades(grade: number) {
        if (grade) {
            this.userInfo.grade = grade
            this.assessmentComplete = true;
        }
    }


}
