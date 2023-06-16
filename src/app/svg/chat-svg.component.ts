import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-svg',
  standalone: true,
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.50002 10H12.5M10 18.3333C14.6025 18.3333 18.3334 14.6025 18.3334 10C18.3334 5.3975 14.6025 1.66667 10 1.66667C5.39752 1.66667 1.66669 5.3975 1.66669 10C1.66669 11.5175 2.07252 12.9417 2.78169 14.1667L2.08335 17.9167L5.83335 17.2183C7.09964 17.9509 8.53711 18.3355 10 18.3333Z" stroke="#00BB8F" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
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
export class ChatSvgComponent {

}
