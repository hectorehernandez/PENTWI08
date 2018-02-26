import { Component } from '@angular/core';
import { CategoryDTO } from './categories/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  public selectedCategory: CategoryDTO;

  public categoryChanged(category: CategoryDTO) {
    this.selectedCategory = category;
  }
}
