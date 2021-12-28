import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { UserModel } from '../shared/userModel';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  filter_id!: any;
  boxhidding:any

  filter_name!: string;
  formValue !: FormGroup;
  UserData !: any;
  UserModelObj = new UserModel()
  constructor(private formBuilder: FormBuilder,
    private api: ApiService) { }
 
  ngOnInit(): void {
    this.boxhidding=true
    this.formValue = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      phone: [''],
      loaction: ['']
    })
    // this.getAllData()
  }
  updatebox(){
  this.boxhidding=true
  }


  getAllData() {
    console.log('get data call')
    this.api.getUser()
      .subscribe(res => {
        this.UserData = res;
        // console.log(res)
      })
  }

  postUserDetails() {
    this.UserModelObj.name = this.formValue.value.name;
    this.UserModelObj.email = this.formValue.value.email;
    this.UserModelObj.phone = this.formValue.value.phone;
    this.UserModelObj.loaction = this.formValue.value.loaction;
    this.boxhidding=true

    this.api.postUser(this.UserModelObj)
      .subscribe((res) => {
        // console.log(res);
        alert("user add successfully")
        let ref = document.getElementById('exit')
        ref?.click();
        this.formValue.reset()
        // setTimeout(this.getAllData,3000)
        this.getAllData()
      }, (err) => {
        console.log(err)
        alert("something wrong "+err)
      })

  }
 
  filterdata() {
    if (this.filter_id===undefined || this.filter_id===''){
      this.filter_id=0
    }
    this.api.filterid({'id':this.filter_id,'name':this.filter_name})
      .subscribe(res => {
        this.UserData = res
      })}

  editData(row: any) {
    this.boxhidding=false
    this.UserModelObj.id = row.id;
    // this.formValue.controls["id"].setValue(row.id);
    this.formValue.controls["name"].setValue(row.name)
    this.formValue.controls["email"].setValue(row.email)
    this.formValue.controls["phone"].setValue(row.phone)
    this.formValue.controls["loaction"].setValue(row.loaction)
  }
  // ngDoCheck(){
  //   // this.getAllData()
  // }
  deleteData(row: any) {
    // alert(row.id +" is deleted")
    // alert(row.id +" User Deleted")
    this.api.deleteUser(row.id)
      .subscribe((res) => {
        alert(row.id +" User hello Deleted")
        this.getAllData()
        // setTimeout(this.getAllData,2000)
    // setTimeout(()=>{console.log('shubham')},2000)
      },err=>{console.log(err)})
    // setTimeout(this.getAllData,2100)
    // setTimeout(()=>{console.log('saurabh')},2100)
  }

  updateUserDetails() {
    // this.UserModelObj.id = this.formValue.value.id;
    this.UserModelObj.name = this.formValue.value.name;
    this.UserModelObj.email = this.formValue.value.email;
    this.UserModelObj.phone = this.formValue.value.phone;
    this.UserModelObj.loaction = this.formValue.value.loaction;
    this.boxhidding=false

    this.api.updateUser(this.UserModelObj, this.UserModelObj.id)
      .subscribe(res => {
        alert("user Updated")
        let ref = document.getElementById('exit')
        ref?.click();
        this.formValue.reset()
        this.getAllData()
      }
    )
  }
}