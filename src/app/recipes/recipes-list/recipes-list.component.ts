import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "This is simply a test", 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Recipe('A Test Recipe', "This is simply a test", 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ];

  constructor() {
  }

  ngOnInit() {

  }
}
