import { MountConfig } from 'cypress/angular';
import { AlertSimpleComponent } from './alert-simple.component';

describe(AlertSimpleComponent.name, () => {
  describe('Defaults', () => {
    beforeEach(() => {
      const config: MountConfig<AlertSimpleComponent> = {
        declarations: [],
        imports: [],
        providers: [],
      };
      cy.mount(AlertSimpleComponent, config);
    });
    it('should have no message', () => {
      cy.get('[data-testid="ht-ui-simple-alert"]')
        .get('[data-testid="message"]')
        .should('have.text', '');
    });
    it('should have the info icon', () => {
      cy.get('[data-testid="ht-ui-simple-alert"]')
        .get('[data-testid="icon-default"]')
        .should('exist');
    });
    it('should have an alert class', () => {
      cy.get('[data-testid="ht-ui-simple-alert"]').should(
        'have.class',
        'alert',
      );
    });
    it('should not have any specific alert classes', () => {
      cy.get('[data-testid="ht-ui-simple-alert"]').should('not.have.class', [
        'alert-sucess',
        'alert-info',
        'alert-warning',
        'alert-error',
      ]);
    });
  });
  describe('The Message', () => {
    beforeEach(() => {
      const config: MountConfig<AlertSimpleComponent> = {
        declarations: [],
        imports: [],
        providers: [],
        componentProperties: {
          message: 'Custom message',
        },
      };

      cy.mount(AlertSimpleComponent, config);
    });
    it('allows a message to be configured', () => {
      cy.get('[data-testid="ht-ui-simple-alert"]')
        .get('[data-testid="message"]')
        .should('have.text', 'Custom message');
    });
  });
  describe('Icons and Styling', () => {
    describe('Info', () => {
      beforeEach(() => {
        const config: MountConfig<AlertSimpleComponent> = {
          declarations: [],
          imports: [],
          providers: [],
          componentProperties: {
            message: 'Info message',
            type: 'info',
          },
        };

        cy.mount(AlertSimpleComponent, config);
      });
      it('Info Icon Displayed', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]')
          .get('[data-testid="icon-info"]')
          .should('exist');
      });
      it('Has the alert-info class', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]').should(
          'have.class',
          'alert-info',
        );
      });
    });
    describe('Success', () => {
      beforeEach(() => {
        const config: MountConfig<AlertSimpleComponent> = {
          declarations: [],
          imports: [],
          providers: [],
          componentProperties: {
            message: 'Info message',
            type: 'success',
          },
        };

        cy.mount(AlertSimpleComponent, config);
      });
      it('Success Icon Displayed', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]')
          .get('[data-testid="icon-success"]')
          .should('exist');
      });
      it('Has the alert-Success class', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]').should(
          'have.class',
          'alert-success',
        );
      });
    });
    describe('Error', () => {
      beforeEach(() => {
        const config: MountConfig<AlertSimpleComponent> = {
          declarations: [],
          imports: [],
          providers: [],
          componentProperties: {
            message: 'Info message',
            type: 'error',
          },
        };

        cy.mount(AlertSimpleComponent, config);
      });
      it('Success Icon Displayed', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]')
          .get('[data-testid="icon-error"]')
          .should('exist');
      });
      it('Has the alert-error class', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]').should(
          'have.class',
          'alert-error',
        );
      });
    });
    describe('Warning', () => {
      beforeEach(() => {
        const config: MountConfig<AlertSimpleComponent> = {
          declarations: [],
          imports: [],
          providers: [],
          componentProperties: {
            message: 'Info message',
            type: 'warning',
          },
        };

        cy.mount(AlertSimpleComponent, config);
      });
      it('Warning Icon Displayed', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]')
          .get('[data-testid="icon-warning"]')
          .should('exist');
      });
      it('Has the alert-warning class', () => {
        cy.get('[data-testid="ht-ui-simple-alert"]').should(
          'have.class',
          'alert-warning',
        );
      });
    });
  });
});
