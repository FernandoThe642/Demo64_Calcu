import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../domain/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  post_f: Post = new Post() 
  post: any
  photo: any
  comment: any
  idPost: number = 0
  posts: any

  constructor(private postService: PostService){}

  setId(id: number, title: string, body: string) {
   this.idPost = id
   this.post_f.id= id
   this.post_f.title=title
   this.post_f.body=body

    this.postService.addPost(this.post_f)
    this.ngOnInit()
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

    this.postService.getPosts().then(data => {

      this.posts = data.docs.map((doc:any) => {
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      
      console.log('post', this.posts)
    })

    


  }


  guardar(){

  }

}
