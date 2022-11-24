import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  name?: string;
  total?: number;
  constructor(private router: Router) {
    this.name = this.router.getCurrentNavigation()!.extras.state!['name'];
    this.total = this.router.getCurrentNavigation()!.extras.state!['total'];
  }

  ngOnInit(): void {}
}
