import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  product?: Product;
  selectedItem: number = 1;
  productNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService : CartService
  ) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.productId).subscribe((res) => {
      this.product = res;
    });
  }

  ngOnInit(): void {}

  
  addToCart(): void {
    this.product!.quantity = this.selectedItem;
    this.cartService.addToCart(this.product!);
  }
  changeSelectedItem(value: string): void {
    this.selectedItem = Number(value);
  }
}
