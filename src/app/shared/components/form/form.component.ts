import { Component, Input, OnInit } from '@angular/core';
// import { TextFormInterface } from '../../../interfaces/TextFormInterface';

@Component({
  selector: 'shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '';
  @Input()
  description: string = '';
}
