import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL : string = 'http://localhost:4200/api/';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.SERVER_URL+'users');
  }
  
  getUser(userId:number){
    return this.http.get(`${this.SERVER_URL}users/${userId}`)
  }
  addUser(user: User){
    return this.http.post(`${this.SERVER_URL}users`, user)
  }
  updateUser(user:User){
    return this.http.put(`${this.SERVER_URL}users/${user.id}`, user)
  }
  deleteUsers(userId:number){
    return this.http.delete(`${this.SERVER_URL}users/${userId}`)
  }
}
