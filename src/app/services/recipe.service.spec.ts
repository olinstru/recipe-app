// recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiKey = 'YOUR_API_KEY';
  private apiUrl = 'https://api.example.com/recipes';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string) {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&q=${query}`;
    return this.http.get(url);
  }
}
