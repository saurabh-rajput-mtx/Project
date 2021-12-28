import { Component, OnInit } from '@angular/core';
import { Feedback,ContactType } from '../shared/feedback';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedbackForm!:FormGroup;
  feedback! :Feedback;
  ContactType=ContactType;

  constructor(private fb:FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
  }
  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }
  onSubmit(){
    this.feedback=this.feedbackForm.value
    console.log(this.feedback)
    this.feedbackForm.reset()
  }

}
