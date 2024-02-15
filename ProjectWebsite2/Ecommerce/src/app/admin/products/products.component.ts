import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { PRODUCTS } from './db-products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  visibleSidePanel:boolean = false;
  productObject = PRODUCTS;

  addProduct(): void {
    const newProduct = {
      id: this.productObject.length + 1,
      album_name: this.productObject.album_name,
      price: this.productObject.price,
      genre: this.productObject.genre,
      artist: this.productObject.artist,
      description: this.productObject.description,
      image: this.productObject.image
    };
    this.productObject.push(newProduct);
  }
  
  openSidePanel(): void {
    this.visibleSidePanel = true; // Set visibleSidePanel to true to open the side panel
  }
  
  closeSidePanel(){
    this.visibleSidePanel=false;
  }

}
