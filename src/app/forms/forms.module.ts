import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as TemplateFormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { ClassicComponent } from './classic/classic.component';
import { Classic2Component } from './classic2/classic2.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TemplateFormsModule,
    FormsRoutingModule
  ],
  declarations: [ClassicComponent, Classic2Component]
})
export class FormsModule { }
