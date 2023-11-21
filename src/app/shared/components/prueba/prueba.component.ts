import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {

  @Input()
  title: string = 'Prueba';

}
