import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  role:any;
  height:any;
  weight:any;

  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.role = this.token.getUser().roles[0];
    this.height = this.getHeight();
    this.weight = this.getWeight();
  }

  isUser(): any {
    return this.currentUser.roles.includes('ROLE_USER');
  }

  getHeight(): any {
    this.userService.getHeight(this.currentUser.id).subscribe((data)=>this.height = data);
  }
  
  getWeight(): any {
    this.userService.getWeight(this.currentUser.id).subscribe((data)=>this.weight = data);
  }  
}
