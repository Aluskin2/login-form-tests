describe("Login Form", () => {
    // Przed każdym testem odwiedź stronę logowania
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("renders login form correctly", () => {
        // Sprawdź, czy pola i przycisk logowania są widoczne
        cy.get("input[type='text']").should("be.visible");
        cy.get("input[type='password']").should("be.visible");
        cy.get("button[type='submit']").should("be.visible");
    });

    it("shows an error message with incorrect credentials", () => {
        // Wprowadź niepoprawne dane
        cy.get("input[type='text']").type("wrongUser");
        cy.get("input[type='password']").type("wrongPassword");
        cy.get("button[type='submit']").click();

        // Sprawdź, czy pojawia się komunikat o błędzie
        cy.contains("Błąd autoryzacji").should("be.visible");
    });

    it("logs in successfully with correct credentials", () => {
        // Wprowadź poprawne dane
        cy.get("input[type='text']").type("user1");
        cy.get("input[type='password']").type("password1");
        cy.get("button[type='submit']").click();

        // Sprawdź, czy pojawia się komunikat o sukcesie
        cy.contains("Zalogowano poprawnie").should("be.visible");
    });
});