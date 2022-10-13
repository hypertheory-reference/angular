import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class SharedModule {}
