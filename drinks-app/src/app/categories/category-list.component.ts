import { CategoryService, CategoryDTO } from './category.service';
import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit, OnChanges {
  public categories: CategoryDTO[];
  public isActive: boolean;
  public selectedCategory: CategoryDTO;

  @Input() displayAsDropdown: boolean;
  @Input() reloadCategories: boolean;
  @Output() selectedChanged = new EventEmitter<CategoryDTO>();
  @Output() deleteClicked = new EventEmitter<CategoryDTO>();

  constructor(private categoryService: CategoryService) {  }

  ngOnInit(): void {
   this.getCategories();
  }

  ngOnChanges() {
    if (this.reloadCategories) {
      this.getCategories();
    }
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      console.log(response);
      this.categories = response;
      this.reloadCategories = false;
      this.selectedCategory = null;
    } );
  }

  public categorySelected(event: Event, category: CategoryDTO) {
    event.preventDefault();
    this.toggleDropdown();
    this.selectedCategory = category;
    this.selectedChanged.emit(this.selectedCategory);
  }

  public toggleDropdown() {
    this.isActive = !this.isActive;
  }

  onDeleteClick(category: CategoryDTO) {
    console.log('Category toDelete: ', category);
    this.selectedCategory = category;
    this.deleteClicked.emit(this.selectedCategory);
  }
}
