// favorite.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  
  url='http://localhost:3000/joboffer';
  constructor(
    private http:HttpClient
  ) { }

  favoriteJobs(){
   
    return this.http.get(this.url);
  }
}
