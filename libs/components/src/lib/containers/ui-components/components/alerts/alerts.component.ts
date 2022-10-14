import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ht-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertsComponent {}
