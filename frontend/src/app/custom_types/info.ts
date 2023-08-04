import {HttpHeaders} from "@angular/common/http";

export interface BasicUserInfo {
    email: string | null;
    name: string | null;
}

export interface CompleteUserInfo {
    email: string;
    name: string;
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
