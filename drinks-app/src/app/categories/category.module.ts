
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryService } from './category.service';
import { CategoryListComponent } from './category-list.component';
import { CategoryDashboardComponent } from './category-dashboard.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryDashboardComponent,
        CategoryFormComponent],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [CategoryService],
    exports: [CategoryListComponent, CategoryDashboardComponent]
})
export class CategoryModule {}
