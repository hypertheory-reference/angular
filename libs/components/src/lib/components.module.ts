import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { MarkdownModule } from 'ngx-markdown';
import { AlertSimpleComponent } from '@ht/shared-ui';
import { UiComponentsComponent } from './containers/ui-components/ui-components.component';
import { AlertsComponent } from './containers/ui-components/components/alerts/alerts.component';

export const componentsRoutes: Route[] = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'shared-ui',
        component: UiComponentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentsRoutes),
    MarkdownModule.forChild(),
    AlertSimpleComponent,
  ],
  declarations: [
    ComponentsComponent,
    UiComponentsComponent,
    AlertsComponent,
  ],
})
export class ComponentsModule {}
