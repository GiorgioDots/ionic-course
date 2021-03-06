import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((paramMap) => {
        if (!paramMap.has('recipeId')) {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          return;
        }
        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      })
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: "Are you shure?",
      message: "Do you really want to delete this recipe?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present()
    })
  }
}
