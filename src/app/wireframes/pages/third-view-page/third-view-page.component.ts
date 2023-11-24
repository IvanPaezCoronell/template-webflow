import { Component } from '@angular/core';

@Component({
  selector: 'app-third-view-page',
  templateUrl: './third-view-page.component.html',
  styleUrls: ['./third-view-page.component.css'],
})
export class ThirdViewPageComponent {
  public MenuItems = [
    {
      title: 'First Link',
      url: 'wireframeOne',
    },
    {
      title: 'Second Link',
      url: 'wireframeTwo',
    },
    {
      title: 'Third Link',
      url: 'wireframeThree',
    },
    {
      title: 'Four Link',
      url: '#',
    },
  ];
}
