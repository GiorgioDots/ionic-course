import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.thespruceeats.com/thmb/oAls2Y49HemUbrDOUAdv14Mk3V8=/4288x2412/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingridients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl: 'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg/vampire-spagetti.jpg',
      ingridients: ['Spagetti', 'Meat', 'Tomatoes']
    }
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => { return recipe.id === recipeId; })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(el => {
      return el.id !== recipeId;
    });
    this.recipesChanged.next(this.recipes);
  }

}
