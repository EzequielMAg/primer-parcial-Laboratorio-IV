import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }


  public async checkAuth(email: string, password: string) {
    let users: User[] = [];

    try {
      let apiResponse = this.apiService.getUserToAuth(email, password);

      users = await lastValueFrom(apiResponse);

    } catch (error) {
      console.log(error);
    }

    return users.length === 1;
  }
}
