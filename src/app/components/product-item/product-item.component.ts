import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;
  @Output() cartEvent = new EventEmitter();
  selectedItem: number = 1;
  productNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {
    this.product!.quantity = this.selectedItem;
    this.cartEvent.emit(this.product);
  }
  changeSelectedItem(value: string): void {
    this.selectedItem = Number(value);
  }
}
