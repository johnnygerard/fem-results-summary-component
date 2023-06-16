import { Component } from '@angular/core';

@Component({
  selector: 'app-eye-svg',
  standalone: true,
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.99998 11.6667C10.442 11.6667 10.8659 11.4911 11.1785 11.1785C11.4911 10.8659 11.6666 10.442 11.6666 9.99999C11.6666 9.55797 11.4911 9.13404 11.1785 8.82148C10.8659 8.50892 10.442 8.33333 9.99998 8.33333C9.55795 8.33333 9.13403 8.50892 8.82147 8.82148C8.50891 9.13404 8.33331 9.55797 8.33331 9.99999C8.33331 10.442 8.50891 10.8659 8.82147 11.1785C9.13403 11.4911 9.55795 11.6667 9.99998 11.6667Z" stroke="#1125D6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.5 10C15.9258 12.4925 13.0983 15 10 15C6.90167 15 4.07417 12.4925 2.5 10C4.41583 7.63167 6.66 5 10 5C13.34 5 15.5842 7.63167 17.5 10Z" stroke="#1125D6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
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
export class EyeSvgComponent {

}
