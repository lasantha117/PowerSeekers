import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api/v1'; // replace with your API's base URL

  constructor(private http: HttpClient) { }


  // example method to authenticate user and get JWT token
  authenticate(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth/Admin-Authenticate`;
    const credentials = { email, password };
    return this.http.post(url, credentials);
  }

  login(creds:Credential){
    return this.http.post("http://localhost:8080/api/v1/auth/Admin-Authenticate",creds,{
      observe :"response"
    }).pipe(map((response:HttpResponse<any>)=>{
      const body =response.body;
      const headers = response.headers;

      const bearerToken = headers.get("Authorization");
      const token = bearerToken?.replace("Bearer ", "");

      localStorage.setItem("token","token");

      return body;
      }

    ))
  }

  getToken(){
    return localStorage.getItem("token");


  }


}
