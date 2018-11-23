import { Injectable } from '@angular/core';
import {Post} from '../post/post';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  path = 'https://jsonplaceholder.typicode.com/';

  getPosts(userid): Observable<Post[]> {

    if(userid) {
      const newpath = this.path + 'posts?userId=' + userid;
     return this.http.get<Post[]>(newpath);
    } else {
      return this.http.get<Post[]>(this.path + 'posts');
    }

  }
}
