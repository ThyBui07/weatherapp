import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from '../ui/toolbar/toolbar.component';
import { FirebaseModule } from './firebase.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    FirebaseModule
  ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class CoreModule { }
