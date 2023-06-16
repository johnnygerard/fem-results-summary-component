import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from '../score/score.component';

type Score = {
  readonly category: string;
  readonly value: number;
};

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
    ScoreComponent,
  ],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  protected readonly scores: readonly Score[] = [
    { category: 'Reaction', value: 80 },
    { category: 'Memory', value: 92 },
    { category: 'Verbal', value: 61 },
    { category: 'Visual', value: 73 },
  ];
}
