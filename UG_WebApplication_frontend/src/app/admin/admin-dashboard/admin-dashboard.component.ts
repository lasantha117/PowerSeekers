import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({


  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']

})
export class AdminDashboardComponent {

  constructor(private router:Router,private http: HttpClient) {
  }
  lastLogin:any;
  email:any;


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin-login']);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
  ngOnInit(): void {
    // Get last login time and date from localStorage
    this.lastLogin = localStorage.getItem('lastLogin');
    this.email = this.getAdminEmail();

  }



  private apiUrl = 'http://localhost:8080/api/v1/auth/Admin-Authenticate';


  getAdminEmail(): Promise<string> {
    const adminId = 'admin01'; // Replace with the admin ID or any identifier you use
    const url = `${this.apiUrl}`;

    return this.http.get(url)
      .toPromise()
      .then((response: any) => {
        return response.email;
      })
      .catch((error: any) => {
        console.error('Error retrieving admin email:', error);
        return '';
      });
  }


 v2() {
    this.router.navigate(['/add-questions']);
  }


  settings(){
    this.router.navigate(['/settings']);
  }

}
