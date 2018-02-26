import { Component, OnInit, Input } from '@angular/core';
import { DrinkDto, DrinkService } from '../drink.service';
import { CategoryDTO } from '../../categories/category.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  providers: [DrinkService]
})
export class DrinkListComponent implements OnInit {

  public drinks: DrinkDto[];
  private _category: CategoryDTO;
  @Input()
  set category(category: CategoryDTO) {
    this._category = category;
    this.getDrinks();
  }

  get category(): CategoryDTO { return this._category; }

  constructor(private drinkService: DrinkService) {
  }

  ngOnInit() {
    this.getDrinks();
  }

  public getDrinks() {
    this.drinks = [];
    this.drinkService.getByCategory(this._category.strCategory).subscribe(response => {
      console.log(response);
      this.drinks = response.map(data => ({ ...data, image: 'http://' + data.strDrinkThumb }));
    });
  }
}
