import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
// import { Router } from '@angular/router';
// import { Login } from '../shared/login';
import { UpdatePassword } from '../shared/updatepassword';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { AccountService } from '../service/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(private api: AccountService,
    private fb: FormBuilder, private http: HttpClient, private router: Router) { }

    loginForm !: FormGroup;
    loginObj = new UpdatePassword();
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ["", Validators.compose([Validators.required, Validators.email])],
        password: ["", Validators.required],
        oldpassword: ["", Validators.required]

      });
      localStorage.clear();
    }

    gettoken(){
      this.loginObj.email = this.loginForm.value.email;
      // this.loginObj.password = this.loginForm.value.password;
      // this.loginObj.oldpassword= this.loginForm.value.oldpassword;
      this.api.gettoken(this.loginObj)
        .subscribe(res => {
          // alert(res);
          console.log(res[0])
          if (res.length!=0){
            this.router.navigate(['login']);
            alert("tokken send successfully");
            // localStorage.setItem('token', res[0].email);
            // localStorage.setItem('userName', res[0].username);
          }
          else{
            alert("not a valid USER ");
          }
          console.log(res.token)
          // localStorage.setItem('userType', res.userType);
        }, err => {
          alert("something went wrong")
        })
    }
    forget() {
      this.loginObj.email = this.loginForm.value.email;
      this.loginObj.password = this.loginForm.value.password;
      this.loginObj.oldpassword= this.loginForm.value.oldpassword;
      this.api.forget(this.loginObj)
        .subscribe(res => {
          // alert(res);
          console.log(res[0])
          if (res.length!=0){
            this.router.navigate(['login']);
            alert("updated successfully");
            // localStorage.setItem('token', res[0].email);
            // localStorage.setItem('userName', res[0].username);
          }
          else{
            alert("not a valid password ");
          }
          console.log(res.token)
          // localStorage.setItem('userType', res.userType);
        }, err => {
          alert("something went wrong")
        })
    }

}
