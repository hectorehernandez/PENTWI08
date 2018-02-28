import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

export class CategoryDTO {
  public id: number;
  public strCategory: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CategoryService {

  private apiUrl = 'api/categories';

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.apiUrl}`);
  }

  public saveCategory(category: CategoryDTO): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(this.apiUrl, category)
      .catch(this.handleError);
  }

  public updateCategory(category: CategoryDTO): Observable<CategoryDTO> {
    return this.http.put<CategoryDTO>(this.apiUrl, category)
      .catch(this.handleError);
  }

  public deleteCategory(category: CategoryDTO): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${category.id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }
}
