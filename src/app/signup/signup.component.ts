import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // isLoginError : boolean = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

//   OnSubmit(userName,password){
//      this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
//       localStorage.setItem('userToken',data.access_token);
//       this.router.navigate(['/home']);
//     },
//     (err : HttpErrorResponse)=>{
//       this.isLoginError = true;
//     });
//   }

// }

}
