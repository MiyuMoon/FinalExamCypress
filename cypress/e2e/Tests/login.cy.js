import LoginPage from '../Pages/01_loginPage';

describe('Prueba de Login exitoso', () => {
    beforeEach(function () {
        // Carga del fixture de datos de usuario
        cy.fixture('usuarios').as('usuariosData');
    });

    it('Login con standar_user', function () {
        //Ir a la página de login
        LoginPage.visit();

        //Usar datos del fixture para hacer login
        const usuario = this.usuariosData.usuario1;
        LoginPage.login(usuario.username, usuario.password)

        // Verificación de la URL después del login
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
        cy.screenshot();
    });
});
