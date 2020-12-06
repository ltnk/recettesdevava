import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepsRecipePage } from './steps-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: StepsRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsRecipePageRoutingModule {}
