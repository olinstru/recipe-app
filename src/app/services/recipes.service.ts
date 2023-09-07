import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiID = 'df435d61';
  private apiKey = '4ef3addd40d79a0ef5063ebe0ad1580a';
  private apiUrl = 'https://api.edamam.com/api/recipes/v2';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string) {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&apiID=${this.apiID}&q=pizza`;
    let data = this.http.get(url);
    console.log (data); 
  }
}

