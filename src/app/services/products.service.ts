import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  productsFiltered: Product[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }


  private loadProducts() {

    return new Promise<void>(  ( resolve, reject ) => {
      this.http.get('https://angular-html-54507-default-rtdb.firebaseio.com/products_idx.json')
      .subscribe((resp: any) => {
        this.products = resp;
        this.loading = false;
        resolve();
      });
    });

  }


  getProduct( id: string) {
    return this.http.get(`https://angular-html-54507-default-rtdb.firebaseio.com/products/${ id }.json`);
  };

  searchProduct( term: string) {

    if ( this.products.length === 0 ) {
      // loads products
      this.loadProducts().then( () => {
        // execute after have products
        // apply filter
        this.filterProducts(term);
      });
    } else {
      // apply filter
      this.filterProducts(term);
    }

    console.log('filtereds: ', this.productsFiltered);

  }

  private filterProducts( term: string ) {

    // console.log('products: ', this.products);
    this.productsFiltered = [];

    term = term.toLocaleLowerCase();

    this.products.forEach( prod => {

      const titleLower = prod.title.toLocaleLowerCase();

      if ( prod.category.indexOf( term ) >= 0 || titleLower.indexOf( term ) >= 0 ) {
        this.productsFiltered.push( prod );
      }

    });

  }

}
