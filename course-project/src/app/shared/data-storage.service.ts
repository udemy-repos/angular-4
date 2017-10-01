import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    constructor(
        private recipeService: RecipeService,
        private http: Http,
        private authService: AuthService
    ) { }

    saveRecipes() {
        const recipes = this.recipeService.getRecipes();
        const token = this.authService.getToken();
        return this.http
            .put(
                'https://ng-recipe-book-83a52.firebaseio.com/recipes.json?auth=' + token,
                recipes
            );
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-83a52.firebaseio.com/recipes.json?auth=' + token)
            .map((response: Response) => response.json())
            .subscribe((recipes) => this.recipeService.setRecipes(recipes));
    }
}
