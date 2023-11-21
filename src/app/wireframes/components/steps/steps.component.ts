import { Component, Input } from '@angular/core';

@Component({
  selector: 'wireframe-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
