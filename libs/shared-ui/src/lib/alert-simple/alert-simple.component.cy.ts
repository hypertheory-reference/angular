import { MountConfig, mount } from 'cypress/angular';
import { AlertSimpleComponent } from './alert-simple.component';

describe(AlertSimpleComponent.name, () => {
  const config: MountConfig<AlertSimpleComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     mount(AlertSimpleComponent, config);
  })
})
