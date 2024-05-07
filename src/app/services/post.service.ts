import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  constructor(private http: HttpClient) { }

  getAllPost() {
    return this.http.get('http:jsonplaceholder.typicode.com/posts')
  }
}
