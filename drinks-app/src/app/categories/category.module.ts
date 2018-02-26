
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryService } from './category.service';
import { CategoryListComponent } from './category-list.component';

@NgModule({
    declarations: [CategoryListComponent],
    imports: [CommonModule],
    providers: [CategoryService],
    exports: [CategoryListComponent]
})
export class CategoryModule {}
