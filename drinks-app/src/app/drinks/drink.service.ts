import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DrinkDto {
  public idDrink: string;
  public strCategory: string;
  public strDrink: string;
  public strDrinkThumb: string;
}

export class CategoryDTO {
  public strCategory: string;
}

export class ServiceResponse {
  public drinks: DrinkDto[];
}

@Injectable()
export class DrinkService {

  private apiUrl = 'api/';
  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<DrinkDto[]> {
    return this.http.get<ServiceResponse>('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').pipe(map(x => x.drinks));
  }

  // public getByCategory(category) {
  //   return this.http.get<ServiceResponse>('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + category);
  // }

  public getByCategory(category: string): Observable<DrinkDto[]> {
    return null;
  }

  public getCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.apiUrl}categories`);
  }
}
