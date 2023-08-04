import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CompleteUserInfo, HttpOptions} from "../custom_types/info";
import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class DataService {

    httpOptions: HttpOptions;
    backendUrl: string = "https://elearning-assessment-backend.onrender.com" //production
    // backendUrl: string = "http://localhost:3000" //development

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
    }

    sendUserData(data: CompleteUserInfo) {
        console.log(data)
        return this.http.post(this.backendUrl.concat("/userdata"), JSON.stringify(data), this.httpOptions)
    }
}
