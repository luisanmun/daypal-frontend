import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patch-weight-user',
  templateUrl: './patch-weight-user.component.html',
  styleUrls: ['./patch-weight-user.component.css']
})
export class PatchWeightUserComponent implements OnInit {

  currentUser: any;

  form: any = {
    weight: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  onSubmit(): void {
    const {weight} = this.form;

    this.userService.patchWeight(weight, this.currentUser.id).subscribe(
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
  //boton para volver despues de crear
  volver(): void {
    this.router.navigateByUrl('/home');
  }

  checkMinCorrecto(n: number): any {
    return n>=40
  }

  checkMaxCorrecto(n: number): any {
    return n<=300
  }
}
