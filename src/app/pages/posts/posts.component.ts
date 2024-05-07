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
   

  constructor(private postService: PostService){}

  ngOnInit() {
    this.post = this.postService.getAllPost().subscribe(data => {
      this.post = data 
    })

    this.post = this.postService.getAllPhoto().subscribe(data => {
      this.photo = data 
    })
  }

}
