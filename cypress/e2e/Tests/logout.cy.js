import InventarioPage from '../Pages/02_InventarioPage';
import LoginPage from '../Pages/01_loginPage';

describe('Prueba de Logout exitoso', () => {
    beforeEach(function () {
        // Carga del fixture de datos de usuario
        cy.fixture('usuarios').as('usuariosData');
    });

    it('Login y logout con performance_glitch_user', function () {
        //Ir a la página de login
        LoginPage.visit();

        //Usar datos del fixture para hacer login
        const usuario = this.usuariosData.usuario3;
        LoginPage.login(usuario.username, usuario.password)

        // Verificación de la URL después del login
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
        cy.screenshot();
        // Hacer logut
        InventarioPage.logout();

        // Verificación de que el logout fue exitoso (regreso a la página de login)
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
        cy.screenshot();
    });
});
