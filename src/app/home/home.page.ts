import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "../recipes/recipes.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  recipesCategory: string;
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  onClick(cat: string) {
    this.recipesCategory = cat;
    console.log("click btn : ", cat);
    console.log("click btn : ", cat);
  }
}
