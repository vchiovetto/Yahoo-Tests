import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import Login from '../../support/Login';

Given('that enter into the Yahoo website' , () => {
    cy.visit("/");
 })
 
When('insert my email' , () => {
     Login.InsertEmail();
 })
 
And('click in next' , () => {
    Login.ClickNext();
})

And('insert my password' , () => {
    Login.InsertPassword();
})

And('click in next' , () => {
    Login.ClickNext();
})

Then('check login successful' , () => {
    Login.LoginSuccessful();
})