import React from 'react';
import GalleryForm from './GalleryForm';
import { mount } from 'cypress/react';

Cypress.Commands.add('mount', mount);

describe('<GalleryForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GalleryForm />)
  })
})