import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-svg',
  standalone: true,
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10.8334 8.33333V2.5L4.16669 11.6667H9.16669V17.5L15.8334 8.33333H10.8334Z" stroke="#FF5555" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class FlashSvgComponent {

}
