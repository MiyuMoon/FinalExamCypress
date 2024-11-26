class CheckoutPage {
    //definiendo selectores
        Firstname = '#first-name';
        Lastname = '#last-name';
        Postalcode = '#postal-code';
        btnContinue = '.btn_primary';
        
    
    
    //Metodos de interaccion
    
    EnterFirstname (){
        cy.get(this.Firstname).type('Michelle');
    }
    
    EnterLastname (){
        cy.get(this.Lastname).type('Roriv');
    }
    
    EnterPostalcode (){
        cy.get(this.Postalcode).type('123456789');
    }
    
    ClickContinue (){
        cy.get(this.btnContinue).click();
    }
    
    //Método para el flujo completo del checkout
    ckinfo() {
        this.EnterFirstname();
        this.EnterLastname();
        this.EnterPostalcode();
        
      }
    ckcontinue (){
      this.ClickContinue();
    } 
}  
export default new CheckoutPage();