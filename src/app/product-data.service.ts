import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = "https://6388a783d94a7e5040a2ffc0.mockapi.io/api/v1/products";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
      .pipe(
        tap((products: Product[]) => products.forEach(product => product.quantity = 0))
      );
  }
}
