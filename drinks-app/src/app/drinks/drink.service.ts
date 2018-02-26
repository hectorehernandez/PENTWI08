import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

export class DrinkDto {
  public idDrink: string;
  public strCategory: string;
  public strDrink: string;
  public strDrinkThumb: string;
}

@Injectable()
export class DrinkService {

  private apiUrl = 'api/';
  constructor(private http: HttpClient) {

  }

  public getByCategory(category: string): Observable<DrinkDto[]> {
    return this.http.get<DrinkDto[]>(`${this.apiUrl}drinks/?strCategory=${category}`);
  }
}
