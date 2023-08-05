import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {BasicUserInfo} from "../custom_types/info";

@Component({
    selector: 'app-info-page',
    templateUrl: './info-page.component.html',
    styleUrls: ['./info-page.component.css']
})

export class InfoPageComponent {

    email: FormControl<string | null> = new FormControl('', [Validators.required, Validators.email]);
    firstname: FormControl<string | null> = new FormControl('', [Validators.required]);
    lastname: FormControl<string | null> = new FormControl('', [Validators.required]);

    @Output() userInfoCollectEvent = new EventEmitter<BasicUserInfo>();

    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }

        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    onStartAssessment() {
        const userData: BasicUserInfo = {
            email: this.email.value,
            firstname: this.firstname.value,
            lastname: this.lastname.value
        }
        this.userInfoCollectEvent.emit(userData)
    }

}
