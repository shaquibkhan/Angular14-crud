import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { User } from './user.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let users: User[] = [
      {id: 1, title: 'Mr', firstName: 'Shaquib', lastName: 'khan', dob: '1990-08-17', email: 'connectshaquib@gmail.com', password: '12345', accTerms: true },
      {id: 2, title: 'Mr', firstName: 'Shaenzyl', lastName: 'khan', dob: '2021-09-30', email: 'connectShaenzyl@gmail.com', password: '12345', accTerms: true },
    ]
    return {users};
  }
}
