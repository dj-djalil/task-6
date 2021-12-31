import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { User } from './user-dashboard.module';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  formRegister! : FormGroup;
  user :User = new User();
  usersList! :any;
  showAddButton! :boolean;
  showEditButton! : boolean;
  constructor(private formBuilde: FormBuilder, private api :ApiService) { }

  ngOnInit(): void {

    this.formRegister = this.formBuilde.group({
       name :['',Validators.required],
       email:['',[Validators.required,Validators.email]],
       contact:['',Validators.required]
      });

     this.getAllUsers();
  }



  get f() { return this.formRegister.controls; }
  addUser(){
    if(this.formRegister.invalid){
      return;
    }else{
    this.user= new User();
    this.user.name= this.formRegister.value.name;
    this.user.email=this.formRegister.value.email;
    this.user.contact=this.formRegister.value.contact;
    this.api.postUser(this.user)
    .subscribe(res=>{
      console.log(res);
     alert("User Add Successfully");
     document.getElementById("close")?.click();
     this.formRegister.reset();
     this.getAllUsers();
    },
    err=>{
      alert(err);
    }
     )
    }
  }

  getAllUsers(){
    this.api.getUsers().subscribe(res=>{
      this.usersList = res;
    },err=>{

    })
  }
  deleteUser(id:number){
    if(confirm("Are you shure !")){
    this.api.deleteUser(id).subscribe(
      res=>{
         alert("user deleted successfuly");
         this.getAllUsers();
      },err=>{
        alert(err);
      })
    }
  }
onEdit(row:any){
  this.showAddButton=false;
  this.showEditButton=true;
  this.user.id= row.id;
  this.formRegister.controls['name'].setValue(row.name);
  this.formRegister.controls['email'].setValue(row.email);
  this.formRegister.controls['contact'].setValue(row.contact);
}
//this method for reseting  and hiding edit button
onClickAddUser(){
  this.formRegister.reset();
  this.showAddButton=true;
  this.showEditButton=false;
}

updateUser(){
  if(this.formRegister.invalid){
    return;
  }else{
  this.user.name= this.formRegister.value.name;
  this.user.email=this.formRegister.value.email;
  this.user.contact=this.formRegister.value.contact;
  this.api.updateUser(this.user,this.user.id).subscribe(res=>{
    alert("update successfuly");
    document.getElementById("close")?.click();
     this.formRegister.reset();

     this.getAllUsers();
  },err=>{
    alert(err)
  })
}
}
}
