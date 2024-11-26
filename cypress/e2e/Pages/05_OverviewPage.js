class OverviewPage{
    //selectores
    btnFinish = '.btn_action';

    //Metodos de interaccion
    //Checkout paso 2
    FinishCK2() {
    cy.get(this.btnFinish).click();
    }
}
export default new OverviewPage();