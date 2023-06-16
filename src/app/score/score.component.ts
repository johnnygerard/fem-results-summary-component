import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashSvgComponent } from '../svg/flash-svg.component';
import { BrainSvgComponent } from '../svg/brain-svg.component';
import { ChatSvgComponent } from '../svg/chat-svg.component';
import { EyeSvgComponent } from '../svg/eye-svg.component';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    CommonModule,
    FlashSvgComponent,
    BrainSvgComponent,
    ChatSvgComponent,
    EyeSvgComponent,
  ],
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() appCategory = '';
  @Input() appScore = 0;

  ngOnInit(): void {
    if (this.appScore < 0
      || this.appScore > 100
      || !Number.isInteger(this.appScore)) {
      throw Error('appScore must be an integer between 0 and 100');
    }
  }
}
