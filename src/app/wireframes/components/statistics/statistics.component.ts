import { Component, Input } from '@angular/core';

@Component({
  selector: 'wireframes-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
