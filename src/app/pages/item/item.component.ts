import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDescription } from 'src/app/interfaces/product-description.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // product: ProductDescription;
  product: any;
  id: any;

  constructor( private route: ActivatedRoute, public ProductsService: ProductsService) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        this.ProductsService.getProduct(params['id'])
          // .subscribe( (product: ProductDescription) => {
          .subscribe( product => {
            this.id = params['id'];
            this.product = product;
            console.log('product: ', product);
          });
      });
  }

}
