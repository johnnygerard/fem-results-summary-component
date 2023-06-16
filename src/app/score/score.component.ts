import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
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
