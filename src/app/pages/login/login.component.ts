import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    email: "",
    password: ""
  };

  isLoading = false; // Spinner durumu için
  http = inject(HttpClient)
  constructor(private router: Router) {

  }

  onLogin() {
    this.isLoading = true;
    this.http.post("https://api.alikayablog.com.tr/api/AuthContoller/Login", this.loginObj).subscribe((res: any) => {

      if (res.token != null) {
        this.isLoading = false; // İşlem tamamlandığında spinner'ı gizle
        alert("Giriş başarılı");
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("dashboard")
      }

    })
  }
}
