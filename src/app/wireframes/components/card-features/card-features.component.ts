import { Component, Input } from '@angular/core';

@Component({
  selector: 'wireframes-card-features',
  templateUrl: './card-features.component.html',
  styleUrls: ['./card-features.component.css'],
})
export class CardFeaturesComponent {
  @Input() title: string = 'Card Features';
  @Input() description: string = 'Subtitle';
  @Input() image: string = '../../../../assets/iconStar.svg';
  @Input() link: string = '#';

  @Input()
  CardItems = [
    {
      title: 'Default title',
      description: 'Default description',
      image: 'default image',
      link: 'default link',
    },
  ];
}
