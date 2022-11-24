import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //TODO: get all Products
  getProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  //TODO: get single Product with ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}
