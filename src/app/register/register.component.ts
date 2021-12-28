import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/login';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { AccountService } from '../service/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private api: AccountService, private http: HttpClient, private router: Router) {
    this.createForm()
  }
  signUpForm!: FormGroup;
  registor!: Login;
  public signupObj = new Login();

  ngOnInit(): void {
    //   this.registerForm = this.fb.group({ 
    //     email:['', [Validators.required, Validators.email] ],
    //     name:['',Validators.required],
    //     password:['',Validators.required]
    // })

  }
  createForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.signupObj.name = this.signUpForm.value.name;
    this.signupObj.email = this.signUpForm.value.email;
    this.signupObj.password = this.signUpForm.value.password;
    this.api.signUp(this.signupObj)
      .subscribe(res => {
        alert("registed Succesfully");
        this.signUpForm.reset();
        this.router.navigate(['login'])
      }, err => {
        alert("something went wrong")
      })
  }
}


