import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeaturesComponent } from './components/card-features/card-features.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StepsComponent } from './components/steps/steps.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';

@NgModule({
  declarations: [
    CardFeaturesComponent,
    StatisticsComponent,
    StepsComponent,
    CardBlogComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardFeaturesComponent,
    StatisticsComponent,
    StepsComponent,
    CardBlogComponent,
  ],
})
export class WireframesModule {}
