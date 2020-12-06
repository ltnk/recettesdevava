import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "recipes",
    children: [
      /*       {
        path: ":recipeCat",
        loadChildren: () =>
          import("./recipes/recipes.module").then((m) => m.RecipesPageModule),
      }, */
      {
        path: "",
        loadChildren: () =>
          import("./recipes/recipes.module").then((m) => m.RecipesPageModule),
      },
      {
        path: ":recipeId",
        loadChildren: () =>
          import("./recipes/recipe-detail/recipe-detail.module").then(
            (m) => m.RecipeDetailPageModule
          ),
      },
    ],
  },
  {
    path: "steps-recipe",
    children: [
      {
        path: ":recipeId",
        loadChildren: () =>
          import("./steps-recipe/steps-recipe.module").then(
            (m) => m.StepsRecipePageModule
          ),
      },
    ],
  },
  {
    path: 'credits',
    loadChildren: () => import('./credits/credits.module').then( m => m.CreditsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
