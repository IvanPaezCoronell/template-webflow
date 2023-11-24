import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeaturesComponent } from './components/card-features/card-features.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StepsComponent } from './components/steps/steps.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { HeaderThirdSectionComponent } from './components/header-third-section/header-third-section.component';
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [
    CardFeaturesComponent,
    StatisticsComponent,
    StepsComponent,
    CardBlogComponent,
    HeaderThirdSectionComponent,
    PartnersComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardFeaturesComponent,
    StatisticsComponent,
    StepsComponent,
    CardBlogComponent,
    HeaderThirdSectionComponent,
  ],
})
export class WireframesModule {}
