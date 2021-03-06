import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    height:null,
    weight: null,
    sex: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, height,  weight, sex} = this.form;

    this.authService.register(username, email, password, height, weight, sex).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  checkMinCorrectoAltura(n: number): any {
    return n>=150
  }

  checkMaxCorrectoAltura(n: number): any {
    return n<=220
  }

  checkMinCorrectoPeso(n: number): any {
    return n>=40
  }

  checkMaxCorrectoPeso(n: number): any {
    return n<=300
  }
}
