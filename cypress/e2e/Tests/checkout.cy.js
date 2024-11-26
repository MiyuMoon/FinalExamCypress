import LoginPage from '../Pages/01_loginPage';
import InventarioPage from '../Pages/02_InventarioPage';
import CartPage from '../Pages/03_CartPage';
import CheckoutPage from '../Pages/04_yourinformationPage';
import OverviewPage from '../Pages/05_OverviewPage';
import CheckoutFinishPage from '../Pages/06_checkoutFinishPage';

describe('Verificar que se pueda realizar una compra', () => {
    beforeEach(function () {
        // Carga el fixture de datos de usuario
        cy.fixture('usuarios').as('usuariosData');
    });

    it('Realizar el checkout', function () {
        // Realizar el login
        LoginPage.visit();
        const usuario = this.usuariosData.usuario1;
        LoginPage.login(usuario.username, usuario.password)
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

        //Agregar items al carrito
        InventarioPage.addToCart1();
        InventarioPage.addToCart2();

        //Entrando al carrito
        InventarioPage.clickCart();

        // Verificación de la URL ddel carrito
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
        cy.screenshot();
        // Click en checkout
        CartPage.clickCheckout();

        //Verificando la URL del Checkout Paso 1
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html');

        //Flujo Checkout
        CheckoutPage.ckinfo();
        cy.screenshot();
        CheckoutPage.ckcontinue();

        //Verificando la URL del Checkout Paso 2
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html');
        cy.screenshot();
        //Finalizando flujo checkout
        OverviewPage.FinishCK2();

        //Verificando la URL del Checkout completo
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html');
        CheckoutFinishPage.verifycheckout();
        cy.screenshot();

        //Cerrar la sesión
        InventarioPage.logout();

    });
});