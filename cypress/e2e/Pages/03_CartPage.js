class CartPage {
    //selectores
    cartItem = '.inventory_item_name';
    checkout= '.btn_action';
    
    //métodos de interacción
    
    openMenu(){
        cy.get(this.menuButton).click();
    }
    
    clickLogout(){
        cy.get(this.logoutLink).click();
    }
    
    clickCheckout(){
        cy.get(this.checkout).click();
    }
    
} 
export default new CartPage();