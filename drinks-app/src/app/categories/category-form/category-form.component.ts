import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CategoryDTO } from '../category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnChanges  {
    @Input() category: CategoryDTO;

    @Output() categoryAdded = new EventEmitter<CategoryDTO>();
    @Output() categoryUpdated = new EventEmitter<CategoryDTO>();
    public categoryForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnChanges() {
        console.log('category from parent: ' + this.category);
        this.categoryForm.reset({
            name: this.category ? this.category.strCategory : ''
        });
    }

    private createForm() {
        this.categoryForm = this.formBuilder.group({
            name: ['', Validators.required ]
        });
    }

    public saveClicked() {
        const formModel = this.categoryForm.value;

        const categoryDTO = Object.assign({}, this.category);
        categoryDTO.strCategory = formModel.name;

        if (categoryDTO.id > 0) {
            this.categoryUpdated.emit(categoryDTO);
        } else {
            this.categoryAdded.emit(categoryDTO);
        }
        this.category = null;
        this.categoryForm.reset();
    }
}
