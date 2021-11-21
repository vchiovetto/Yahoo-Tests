import{ELEMENTS} from './element'

class Login {

InsertEmail(user_name) {
    cy.get(ELEMENTS.Login)
    .type(Cypress.env('user_name'));
}

ClickNext() {
    cy.get(ELEMENTS.Next).click();
}

InsertPassword(user_password) {
    cy.get(ELEMENTS.Password)
    .type(Cypress.env('user_password'));
}

LoginSuccessful() {
    cy.wait(6000)
    cy.get(ELEMENTS.Profile).should("be.visible");
}

}
export default new Login();


