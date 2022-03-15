import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatResponse } from '../types/response/CatResponse';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCatImage() {
    return this.http.get<CatResponse>("https://aws.random.cat/meow");
  }
}
