import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

    
  post: any
  photo: any
  comment: any
  idPost: number = 0

  constructor(private postService: PostService){}

  setId(id: number) {
   this.idPost = id
  }

  ngOnInit() {
    this.post = this.postService.getAllPost().subscribe(data => {
      this.post = data 
    })

    this.post = this.postService.getAllPhoto().subscribe(data => {
      this.photo = data 
    })

    this.post = this.postService.getAllCommets().subscribe(data => {
      this.comment = data
    })
  }

}
