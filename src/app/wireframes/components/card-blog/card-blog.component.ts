import { Component, Input } from '@angular/core';

@Component({
  selector: 'wireframe-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css'],
})
export class CardBlogComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() iconOne: string = '';
  @Input() iconTwo: string = '';
  @Input() statisticOne: string = '';
  @Input() statisticTwo: string = '';
  @Input() date: string = '';


}
