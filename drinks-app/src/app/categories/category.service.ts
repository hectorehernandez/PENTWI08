import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

export class CategoryDTO {
  public strCategory: string;
}

@Injectable()
export class CategoryService {

  private apiUrl = 'api/categories';
  constructor(private http: HttpClient) { }

  public getCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.apiUrl}`);
  }
}
