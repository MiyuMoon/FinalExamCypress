class CheckoutFinishPage{

    //Selectores
    Msg = '.complete-header';

    //Metodo de interacción

    verifycheckout(){
        cy.get(this.Msg).should('contain', 'THANK YOU FOR YOUR ORDER');
    }
}
export default new CheckoutFinishPage();