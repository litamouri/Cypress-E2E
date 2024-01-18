 export class registerPage {

    weblocators={
        firstName:'#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telePhone:'#input-telephone',
        password:'#input-password',
        confirmPassword: '#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'

    }

    openURL (){
    
        cy.visit(Cypress.env('URL'))
    }

    enterfirstName (Fname){
        cy.get(this.weblocators.firstName).type (Fname)
    }

    enterlastName (Lname){
        cy.get(this.weblocators.lastName).type (Lname)
    }

    enterEmail (mail) {
        cy.get(this.weblocators.email).type (mail)
    }

    enterTelephone (telephone) {
        cy.get(this.weblocators.telePhone).type (telephone)
    }

    enterpassword (password) {
        cy.get(this.weblocators.password).type (password)
        cy.get(this.weblocators.confirmPassword).type (password)

    }

    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickOncontinue () {
        cy.get(this.weblocators.continue).click()
    }





}