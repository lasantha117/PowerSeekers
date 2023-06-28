import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AdminDetails {
  email: string;
  name: string;
  password: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  admin: AdminDetails = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAdminDetails();
  }

  getAdminDetails(): void {
    const url = 'http://localhost:8080/api/v1/auth/details';

    this.http.get<AdminDetails>(url).subscribe(
      (response: AdminDetails) => {
        this.admin = response;
      },
      (error: any) => {
        console.error('Failed to fetch admin details:', error);
      }
    );
  }
}
