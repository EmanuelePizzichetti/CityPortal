import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../app/models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  getAllPost():Observable<any>
  {
    return this._http.get(environment.postUrl);
  }

  getPostById(ID:Number):Observable<any>
  {
    return this._http.get(environment.postUrl + '/' + ID);
  }

  createPost(data:Post):Observable<any>
  {
    return this._http.post(environment.postUrl, data);
  }

}
