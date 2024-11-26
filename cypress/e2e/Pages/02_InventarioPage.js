class InventoryPage {
    //Definiendo selectores
    menuButton = '.bm-burger-button';
    logoutLink = '#logout_sidebar_link';
    cart = '[fill="currentColor"]';
    
    addToCart1() {
      cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    }

    addToCart2() {
      cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    }

    clickCart(){
      cy.get(this.cart).click();
    }
  
    openMenu() {
      cy.get(this.menuButton).click();
    }
  
    clickLogout() {
      cy.get(this.logoutLink).click();
    }
  
    logout() {
      this.openMenu();
      this.clickLogout();
    }
  }
  
  export default new InventoryPage();