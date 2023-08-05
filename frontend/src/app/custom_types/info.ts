import {HttpHeaders} from "@angular/common/http";

export interface BasicUserInfo {
    email: string | null;
    firstname: string | null;
    lastname: string | null;
}

export interface CompleteUserInfo {
    email: string;
    firstname: string;
    lastname: string;
    grade: number;
}

export interface Question {
    "id": number,
    "question": string,
    "options": string[],
    "answer": string
}

export interface HttpOptions {
    headers: HttpHeaders;
}
