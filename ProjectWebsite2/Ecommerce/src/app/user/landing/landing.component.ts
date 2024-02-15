import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from '../../admin/products/db-products';
import { Product } from '../../admin/products/interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  @Input()
  product: Product = {} as Product;
  productObject = PRODUCTS;


  // onEdit(item:any) {
  //   this.productObject = item;
  //   this.openSidePanel();
  // }  

}
