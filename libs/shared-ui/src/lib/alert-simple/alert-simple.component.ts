import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ht-ui-alert-simple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-simple.component.html',
  styleUrls: ['./alert-simple.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertSimpleComponent {
  @Input() message = '';
  @Input() type: 'default' | 'info' | 'success' | 'error' | 'warning' =
    'default';
}
