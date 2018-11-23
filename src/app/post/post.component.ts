import { Component, OnInit } from '@angular/core';
import {Post} from './post';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
declare let alertify : any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  path = 'https://jsonplaceholder.typicode.com/';

  posts: Post[];
  users: User[];

  ngOnInit() {

   this.getUsers();
   this.activatedRoute.params.subscribe(params => {
     this.getPosts(params['userid']);
   });
  }


  getPosts(userid) {
    const newpath = this.path + 'posts?userId=' + userid;
    if(userid) {
      this.http.get<Post[]>(newpath).subscribe(response => {
        this.posts = response;
      });
    } else {
      this.http.get<Post[]>(this.path + 'posts').subscribe(response => {
        this.posts = response;
      });
    }

  }

  getUsers() {
    this.http.get<User[]>(this.path + 'users').subscribe(response => {
      this.users = response;
    });
  }

  addToFavourites(post) {
    alertify.success('added to favs.' + post.title);
  }
}
