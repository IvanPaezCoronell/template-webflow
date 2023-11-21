import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstViewPageComponent } from './wireframes/pages/first-view-page/first-view-page.component';
import { SecondViewPageComponent } from './wireframes/pages/second-view-page/second-view-page.component';
import { ThirdViewPageComponent } from './wireframes/pages/third-view-page/third-view-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/wireframeOne', pathMatch: 'full' },
  { path: 'wireframeOne', component: FirstViewPageComponent },
  { path: 'wireframeTwo', component: SecondViewPageComponent },
  { path: 'wireframeThree', component: ThirdViewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
