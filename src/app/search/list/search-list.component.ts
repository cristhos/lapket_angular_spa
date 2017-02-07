import { Component } from '@angular/core';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'list-search',
  template: require('./search-list.component.html'),
  styles: [`
  `],
})

export class SearchListComponent {
  Products;
  constructor(private productService : ProductService) {}

}
