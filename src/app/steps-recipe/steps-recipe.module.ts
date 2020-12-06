import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepsRecipePageRoutingModule } from './steps-recipe-routing.module';

import { StepsRecipePage } from './steps-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepsRecipePageRoutingModule
  ],
  declarations: [StepsRecipePage]
})
export class StepsRecipePageModule {}
