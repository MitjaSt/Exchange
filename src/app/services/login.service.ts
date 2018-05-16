import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
    private username: string;
    private password: string;

    private mockData: Array<any> = [];

    constructor(private http:HttpClient) { }

    // Create http request to dummy json file with positive login response
    authenticate(email, password) {
        return this.http.get('/assets/mock/login_data.json');
    }
}