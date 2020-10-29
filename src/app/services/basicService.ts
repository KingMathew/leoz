import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BasicService {

    public httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    constructor(private httpClient: HttpClient) {

    }

    sendPostRequest(json: any, method: string) {
        return this.httpClient.post(method, json, this.httpOptions);
    }

}