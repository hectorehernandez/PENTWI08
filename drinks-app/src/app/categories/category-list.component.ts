import { CategoryService, CategoryDTO } from './category.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  public categories: CategoryDTO[];
  public isActive: boolean;

  @Output() selectedChanged = new EventEmitter<CategoryDTO>();

  constructor(private categoryService: CategoryService) {  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response => {
      console.log(response);
      this.categories = response; } );
  }

  public categoryClicked(event: Event, category: CategoryDTO) {
    event.preventDefault();
    this.toggleDropdown();
    this.selectedChanged.emit(category);
  }

  public toggleDropdown() {
    this.isActive = !this.isActive;
  }
}
