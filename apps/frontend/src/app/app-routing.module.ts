import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@ht/home').then((m) => m.HomeModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
