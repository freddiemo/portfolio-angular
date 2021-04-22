import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-html-54507-default-rtdb.firebaseio.com/products_idx.json')
      .subscribe((resp: any) => {
        console.log('products: ', resp);
        this.products = resp;
        this.loading = false;
      });
  }
}
