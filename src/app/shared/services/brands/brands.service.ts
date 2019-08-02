import { Injectable } from '@angular/core';
import { CrudRead } from '../crud-read';
import { Brand } from '../../../models/brand';
import { Observable, of } from 'rxjs';
import { BRANDS } from '../../../../assets/mocks/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService implements CrudRead<Brand> {
  getAll(): Observable<Brand[]> {
    return of(BRANDS);
  }

  get(id: string): Observable<Brand> {
    return of(BRANDS.find(b => b.objectID === id));
  }
}
