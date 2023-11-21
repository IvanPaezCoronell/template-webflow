import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './components/prueba/prueba.component';
import { FormComponent } from './components/form/form.component';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';

@NgModule({
  declarations: [PruebaComponent, FormComponent, FooterLinksComponent],
  imports: [CommonModule],
  exports: [PruebaComponent, FormComponent, FooterLinksComponent],
})
export class SharedModule {}
