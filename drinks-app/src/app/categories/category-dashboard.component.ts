import { Component } from '@angular/core';
import { CategoryDTO, CategoryService } from './category.service';
@Component({
    selector: 'app-category-dashboard',
    templateUrl: './category-dashboard.component.html'
})
export class CategoryDashboardComponent {

    public selectedCategory: CategoryDTO;
    public reloadCategories: boolean;
    public showSuccessMessage: boolean;

    constructor(private categoryService: CategoryService) {
        this.showSuccessMessage = false;
    }

    public onSaveCategory(category: CategoryDTO) {
        console.log(category);
        if (category.id > 0) {
            this.categoryService.updateCategory(category).subscribe(cat => {
                console.log('Category Saved' + cat);
                this.saveSuccessful();
            });
        } else {
            this.categoryService.saveCategory(category).subscribe(cat => {
                console.log('Category Updated' + cat);
                this.saveSuccessful();
            });
        }
    }

    private saveSuccessful() {
        this.reloadCategories = true;
        this.showSuccessMessage = true;
    }

    private resetValues(category: CategoryDTO = null) {
        this.reloadCategories = false;
        this.selectedCategory = category;
        this.showSuccessMessage = false;
    }

    public categoryChanged(category: CategoryDTO) {
        console.log(category);
        this.resetValues();
    }

    public addCategoryClicked() {
        this.resetValues(new CategoryDTO());
    }

    public deleteCategory(category: CategoryDTO) {
        this.reloadCategories = false;
        this.categoryService.deleteCategory(category).subscribe(res => {
            this.reloadCategories = true;
            this.showSuccessMessage = true;
        });
    }

    public dismiss() {
        this.resetValues();
    }
}
