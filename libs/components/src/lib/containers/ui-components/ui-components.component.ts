import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ht-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponentsComponent {}
