import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService.getProducts().subscribe((res) => {
      this.productList = res['products'];
    });
  }

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
