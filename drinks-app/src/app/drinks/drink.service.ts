import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

import { AngularFireDatabase } from 'angularfire2/database'
import { Reference } from '@firebase/database';
import { Repo } from '@firebase/database/dist/esm/src/core/Repo';

export class DrinkDto {
  public idDrink: string;
  public strCategory: string;
  public strDrink: string;
  public strDrinkThumb: string;
}

export class CategoryDTO
{
  public id: number;
  public strCategory: string;
}

export class ServiceResponse{
  public drinks: DrinkDto[];
}

@Injectable()
export class DrinkService {

  constructor(private http: HttpClient, private db: AngularFireDatabase) {

  }

  public getAll(): Observable<DrinkDto[]> {
    return this.http.get<ServiceResponse>('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').pipe(map(x => x.drinks));
  }

  // public getByCategory(category) {
  //   return this.http.get<ServiceResponse>('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + category);
  // }

  public getByCategory(categoryid: number): Observable<DrinkDto[]> {
    return this.db.list('/drinks', ref=>ref.orderByChild('categoryId').equalTo(categoryid))
    .snapshotChanges().map(data=>data.map(x=>{
       let obj = x.payload.val() as DrinkDto;
       return obj;
    }));
  }

  public getCategories(): Observable<CategoryDTO[]> {
    return this.db.list('categories').snapshotChanges().map(data=>data.map(x=>{
      const id = +x.payload.key;
      const obj = x.payload.val() as CategoryDTO;

      return ({id: id, ...obj});
    }));
  }
}
