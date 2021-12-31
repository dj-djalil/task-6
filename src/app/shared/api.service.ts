import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userApiUrl ='http://localhost:8081'
  constructor(private http :HttpClient) { }

  postUser(data :any){

    return this.http.post<any>(this.userApiUrl+'/api/user',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUsers(){

   return  this.http.get<Object>(this.userApiUrl+"/api/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUser(data:any, id:number){

   return  this.http.put<any>(this.userApiUrl+"/api/user/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUser(id:number){

   return  this.http.delete<any>(this.userApiUrl+"/api/user/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
