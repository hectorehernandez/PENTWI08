import { Component, OnInit } from '@angular/core';
import { DrinkDto, DrinkService, CategoryDTO } from './drink.service';

@Component({
  selector: 'drink-list',
  templateUrl: './drink-list.component.html',
  providers: [DrinkService]
})
export class DrinkListComponent implements OnInit {

  public categories: CategoryDTO[];
  public drinks: DrinkDto[];
  public isActive: boolean;
  public categoryTitle: string;
  public selectedCategory: CategoryDTO;

  constructor(private drinkService: DrinkService) {
    this.categoryTitle = '';
  }

  ngOnInit(): void {
    this.drinkService.getCategories().subscribe(response => {
      console.log(response);
      this.categories = response});
  }

  public showByCategory(event: Event, categoryDto: CategoryDTO) {
    event.preventDefault();
    this.isActive = !this.isActive;
    this.drinks = [];
    this.selectedCategory = categoryDto;
    this.drinkService.getByCategory(categoryDto.id).subscribe(response => {
      console.log(response);
      this.drinks = response.map(data => ({ ...data, image: 'http://' + data.strDrinkThumb }));
    });
  }

  public toggleDropdown() {
    this.isActive = !this.isActive;
  }
}
