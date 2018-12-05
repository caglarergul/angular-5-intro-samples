import {Component, OnInit} from '@angular/core';
import {Post} from './post';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AlertifyService} from '../services/alertify.service';
import {PostService} from '../services/post.service';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postServicee: PostService,
    private userService : UserService
  ) {

  }


  path = 'https://jsonplaceholder.typicode.com/';
  posts: Post[];
  users: User[];
  today = new Date(2018,11,5);
  filterText:string;

  ngOnInit() {

    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params['userid']);
    });
  }

  getPosts(userid) {
  this.postServicee.getPosts(userid).subscribe(data => {
     this.posts = data;
   });
  }

  getUsers() {

    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addToFavourites(post) {
    this.alertifyService.success('Added to Favs: ' + post.title);
  }
}
