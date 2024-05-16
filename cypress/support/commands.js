// ***********************************************
// import Login from "../e2e/page_objects/login/Login"
// const login = new Login;
// import credentials from "../e2e/data_objects/credentials";



// Cypress.Commands.add('authLogin', () => {
//     cy.visit("http://20.54.227.23/digioperationwebdev/Home/Login");
//     login.enterEmail(credentials.authLogin.username);
//     login.enterPassword(credentials.authLogin.password);
//     login.clickLogin();

// })

// Cypress.Commands.add('verifierLogin', () => {
//     cy.visit("http://20.54.227.23/digioperationwebdev/Home/Login");
//     login.enterEmail(credentials.verifierLogin.username);
//     login.enterPassword(credentials.verifierLogin.password);
//     login.clickLogin();
// })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })