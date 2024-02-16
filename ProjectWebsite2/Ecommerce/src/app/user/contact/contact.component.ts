import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { Product } from '../../admin/products/interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
