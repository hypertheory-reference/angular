import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '.';
import { environment } from '../../environments/environment';

const modules = [];
if (!environment.production) {
  modules.push(StoreDevtoolsModule.instrument());
}
@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    ...modules,
  ],
  exports: [StoreModule],
})
export class AppNgrxModule {}
