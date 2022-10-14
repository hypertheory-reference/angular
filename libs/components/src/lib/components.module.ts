import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ComponentsComponent } from './components.component';

export const componentsRoutes: Route[] = [
  {
    path: '',
    component: ComponentsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentsRoutes),
  ],
  declarations: [ComponentsComponent],
})
export class ComponentsModule {}
