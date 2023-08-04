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
    name: FormControl<string | null> = new FormControl('', [Validators.required]);

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
            name: this.name.value
        }
        this.userInfoCollectEvent.emit(userData)
    }

}
