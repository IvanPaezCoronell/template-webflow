import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './components/prueba/prueba.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [PruebaComponent, FormComponent],
  imports: [CommonModule],
  exports: [PruebaComponent, FormComponent],
})
export class SharedModule {}
