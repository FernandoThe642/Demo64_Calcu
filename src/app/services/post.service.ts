import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '../domain/post';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  constructor(private http: HttpClient, private firestore: Firestore) {
    //this.mensajesRef = firestore.collection("items")
   }

  getAllPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

 getAllPhoto() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getAllCommets() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }




  //Firebase:

  addPost(post_f: Post){
    addDoc(collection(this.firestore, 'posts'), Object.assign({}, post_f))
  }

  getPosts(){
    return getDocs(query(collection(this.firestore, 'posts')))
  }


}
