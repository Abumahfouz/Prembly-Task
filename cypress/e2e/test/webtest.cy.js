describe ("Web Testing With SauceDemo", ()=>{
    it.only("Visit Site", ()=>{
        //Visit URL
        cy.visit('https://www.saucedemo.com/')
        //Visit command keeps taking time, adding retry is counter-productive
        cy.get('[data-test="login-credentials"]')
        .then((record)=>{
            const usernames = record.text();
            const usernameList = {};
            usernameList = usernames.split(' ');
            const login = usernameList[5];
            cy.log(login)
        })
        cy.get('#user-name').type(login)
        //Get password content from page
        cy.get('#root > div > div.login_wrapper > div.login_credentials_wrap > div > div.login_password').then((value)=>{
            const password = value.text();
            cy.get('#password').type(password)
        })
        
    });
    it("Should login with valid credentials",()=>{

    })
});