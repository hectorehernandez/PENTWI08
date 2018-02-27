import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CategoryDTO } from '../category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnChanges  {
    @Input() category: CategoryDTO;
    @Output() saveCategory = new EventEmitter<CategoryDTO>();
    public categoryForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnChanges() {
        console.log('category from parent: ' + this.category);
        this.categoryForm.setValue({
            name: this.category.strCategory
        });
    }

    private createForm() {
        this.categoryForm = this.formBuilder.group({
            name: ['', Validators.required ]
        });
    }

    public addButtonClicked() {
        const formModel = this.categoryForm.value;

        const categoryDTO = new CategoryDTO();
        categoryDTO.strCategory = formModel.name;
        this.saveCategory.emit(categoryDTO);
    }
}
