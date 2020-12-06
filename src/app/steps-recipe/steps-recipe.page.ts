import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "../recipes/recipes.service";

@Component({
  selector: "app-steps-recipe",
  templateUrl: "./steps-recipe.page.html",
  styleUrls: ["./steps-recipe.page.scss"],
})
export class StepsRecipePage {
  /*  recipes: Recipe[]; */
  loadedRecipe: Recipe;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  /*   ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  } */

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        // redirect
        this.router.navigate(["/recipes"]);
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
}
