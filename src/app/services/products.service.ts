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
        this.products = resp;
        this.loading = false;
      });
  }

  getProduct( id: string) {
    return this.http.get(`https://angular-html-54507-default-rtdb.firebaseio.com/products/${ id }.json`);
  };

}
