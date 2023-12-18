import { Injectable } from '@angular/core';
import { AdminModel } from '../model/adminmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  adminData: AdminModel[] = [
    {
      username: 'admin1',
      password: 'pass1'
    },
    {
      username: 'admin2',
      password: 'pass2'
    },
    {
      username: 'admin3',
      password: 'pass3'
    }
  ]

  loginAdmin(username: string, password: string): boolean {
    const foundAdmin = this.adminData.find(data => data.username === username && data.password === password);
    return !!foundAdmin;
  }

}
