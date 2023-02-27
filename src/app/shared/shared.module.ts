import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { CustomHeaderComponent, LoaderComponent, NotFoundComponent, QuantityComponent } from './components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    CustomHeaderComponent,
    QuantityComponent,
    LoaderComponent
  ],
  declarations: [
    CustomHeaderComponent,
    NotFoundComponent,
    QuantityComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
