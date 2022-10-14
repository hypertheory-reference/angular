import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlaceHolderComponent } from './components/place-holder/place-holder.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@ht/home').then((m) => m.HomeModule),
      },
      {
        path: 'forms',
        component: PlaceHolderComponent,
      },
      {
        path: 'testing',
        component: PlaceHolderComponent,
      },
      {
        path: 'components',
        loadChildren: () =>
          import('@ht/components').then((m) => m.ComponentsModule),
      },
      {
        path: 'redux',
        component: PlaceHolderComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
