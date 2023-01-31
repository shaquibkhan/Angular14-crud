import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { DBoperations } from './helpers/db-operations';
import { User } from './helpers/user.interface';
import { UserService } from './helpers/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crud-latest';
  users: User[];
  submitted: boolean = false;
  buttonText : string = "Submit";
  dbOps : DBoperations


  // registerForm : FormGroup = new FormGroup({})
  registerForm: FormGroup;
  constructor(private toastr: ToastrService, private fb: FormBuilder, private _userSrvc: UserService) {}
  ngOnInit(){
    this.myForm();
    this.getAllUsers();
  }

  myForm() {
    this.buttonText;
    this.dbOps = DBoperations.create;
    this.registerForm = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      firstName: ['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10)])],
      lastName: ['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(10)])],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      dob: ['',Validators.compose([Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      confirmPassword: ['',Validators.required,Validators.minLength(6)],
      accTerms: [false,Validators.required]

    });
  }

  onSubmit(){
    this.submitted = true;
  if(this.registerForm.invalid){
    return;
  }
  switch(this.dbOps){
    case DBoperations.create:

    break;
    case DBoperations.update:

    break;
  }
  }

  onCancel(){
    this.registerForm.reset();
    this.buttonText = "Submit";
    this.dbOps = DBoperations.create;
    this.submitted = false;
  }

  getAllUsers(){
    this._userSrvc.getUsers().subscribe((res: User[])=>{
    this.users = res;
    console.log(res);
    });
  }

  edit(userId: number){
    this.buttonText = "Update";
    this.dbOps = DBoperations.update;
  }
  delete(userId: number){
    this._userSrvc.deleteUsers(userId).subscribe((res)=>{
      this.getAllUsers();
      this.toastr.success("Deleted successfully", "User Registration");
    })
  }



}
