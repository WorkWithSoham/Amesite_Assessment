import {Component, OnInit} from '@angular/core';
import {BasicUserInfo, CompleteUserInfo} from "./custom_types/info";
import {DataService} from "./services/data.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'AmesiteAssessment';
    infoProvided: boolean = false;
    assessmentComplete: boolean = false;
    userInfo: CompleteUserInfo = {
        email: "",
        firstname: "",
        lastname: "",
        grade: 0
    }

    constructor(
        private dataService: DataService
    ) {
    }

    ngOnInit(): void {
    }

    storeUserData(userData: BasicUserInfo) {
        if (userData.email && userData.firstname && userData.lastname) {
            this.userInfo.email = userData.email
            this.userInfo.firstname = userData.firstname
            this.userInfo.lastname = userData.lastname
            this.infoProvided = true;
        }
    }

    getUserGrades(grade: number) {
        if (grade) {
            this.userInfo.grade = grade
            this.assessmentComplete = true;
        }
        this.dataService.sendUserData(this.userInfo).subscribe((res: any) => {
            console.log(res)
        });
    }


}
