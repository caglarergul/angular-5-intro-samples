import { Injectable } from '@angular/core';
import {User} from '../post/user';
import {Observable} from 'rxjs';
import {Post} from '../post/post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  path = 'https://jsonplaceholder.typicode.com/';

  getUsers(): Observable<User[]> {
   return this.http.get<User[]>(this.path + 'users');
  }
}
