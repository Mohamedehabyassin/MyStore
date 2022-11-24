import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart/cart.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartForm?: FormGroup;
  name: string = '';
  address: string = '';
  creditNumber: string = '';
  totalChechkout: number;
  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCart();
    this.totalChechkout = 0;
  }

  ngOnInit(): void {
    this.cartItems.forEach((obj) => {
      this.totalChechkout += obj.price * obj.quantity;
    });
    this.cartForm = new FormGroup({
      fullname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      creditNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(16),
        Validators.maxLength(20),
      ]),
    });
  }

  onSubmit(): void {
    if (this.cartForm?.valid) {
      this.router.navigate(['/order'], {
        state: {
          name: this.name,
          total: this.totalChechkout,
        },
      });
    } else {
      alert('There is a Invalid fields');
    }
  }

  amountChange(): void {
    this.totalChechkout = 0;
    this.cartItems.forEach((element) => {
      this.totalChechkout += element.price * element.quantity;
    });
  }

  deleteItem(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCart();
    this.amountChange();
  }
}
