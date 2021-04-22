import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor( private route: ActivatedRoute, public ProductsService: ProductsService) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        this.ProductsService.getProduct(params['id'])
          .subscribe( product => {
            console.log('product: ', product);
          });
      });
  }

}
