import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // user = {username: '', password: '', remember: false};
  // onSubmit(){
  //   console.log('User ',this.user ) 
  // }
  userActive=this.apilogin.UserActive
  userInactive=this.apilogin.UserInactive
  constructor( private apilogin:LoginService) { }

  ngOnInit(): void {
    


  }
  loggedin(){
    return localStorage.getItem('token')
  }
  onlogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')

  }

}
