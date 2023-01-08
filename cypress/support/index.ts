import "./commands";
import "cypress-wait-until";
import { mount } from "cypress/react18";

/// <reference types="cypress" />
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
declare global {
  namespace Cypress {
    interface Chainable {
      getIframeBody(): Chainable<Element>;
      mount: typeof mount;
    }
  }
}
