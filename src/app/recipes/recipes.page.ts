import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
/*  export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.recipes = this.recipesService.getSpecificRecipes("sugar");
  }
}  */
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  paramsSubscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    this.recipes.sort(this.sortRecipes);
  }

  sortRecipes(a, b) {
    if (a.title < b.title) return -1;
    else if (a.title == b.title) return 0;
    else return 1;
  }
}
