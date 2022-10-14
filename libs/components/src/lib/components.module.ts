import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { MarkdownModule } from 'ngx-markdown';

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
    MarkdownModule.forChild(),
  ],
  declarations: [ComponentsComponent],
})
export class ComponentsModule {}
