import { Component, OnInit } from '@angular/core';
// import { RegisterService } from '../service/register.service';
import { LoginService } from '../service/login.service';
// import { Router } from '@angular/router';
import { Login } from '../shared/login';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   loginForm !: FormGroup;
   loginObj !:Login;

  constructor(private api: AccountService,
    private fb: FormBuilder, private router: Router,
  ) { 
    this.createForm()
  }


  ngOnInit(): void {
    localStorage.clear();
  }
  login() {
    // as we have given correct name so 
    this.loginObj=this.loginForm.value
    console.log(this.loginObj)
    // otherwise do this 
    this.loginObj.email = this.loginForm.value.email;
    this.loginObj.password = this.loginForm.value.password;

    this.api.login(this.loginObj)
      .subscribe(res => {
        // alert(res);
        console.log(res[0])
        if (res.length!=0){
          this.router.navigate(['menu']);
          alert("login successfully");
          localStorage.setItem('token', res[0].email);
          localStorage.setItem('userName', res[0].username);
        }
        else{
          alert("not a valid login ");
        }
        console.log(res.token)
        // localStorage.setItem('userType', res.userType);
        this.loginForm.reset();

      }, err => {
        alert("something went wrong")
        // this.loginForm.reset();

      })

  }
  createForm(){
    this.loginForm = this.fb.group({
      email: ["",Validators.compose([Validators.required, Validators.email])],
      password:[ "",[Validators.required,Validators.minLength(8)]]
    });
  }
}
