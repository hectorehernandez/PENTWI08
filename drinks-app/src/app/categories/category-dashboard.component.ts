import { Component } from '@angular/core';
import { CategoryDTO } from './category.service';
@Component({
    selector: 'app-category-dashboard',
    templateUrl: './category-dashboard.component.html'
})
export class CategoryDashboardComponent {

    public selectedCategory: CategoryDTO;

    public onSaveCategory(category: CategoryDTO) {
        console.log(category);
    }

    public categoryChanged(category: CategoryDTO) {
        console.log(category);
        this.selectedCategory = category;
      }

}
