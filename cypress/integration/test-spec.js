/// <reference types="cypress"> 

describe("renders the login page", () => {
    it("renders correctly", () => {
        cy.visit("http://localhost:3000/login")
        cy.get(".loginPageForm").should("exist")
        cy.get(".image").should("exist")
    })

    it("test to see if user can type", () => {
        cy.visit("http://localhost:3000/login")
        cy.get(".username").type("baker")
        cy.get(".password").type("passwordTest")

    })
})

describe("renders navigation bar", () => {
    it("renders correctly", () => {
        cy.visit("http://localhost:3000/")
        cy.get(".navBar").should("exist")
        cy.get(".links").should("exist")
        cy.get(".home").should("exist")
        cy.get(".orders").should("exist")
        cy.get(".login").should("exist")
        cy.get("#wishList").should("exist")
        cy.get(".cart").should("exist")
    })

    it("test to see if links in navbar clickable", () => {
        cy.get(".home").click()
        cy.url().should("include", "http://localhost:3000/")
        cy.get(".orders").click()
        cy.url().should("include", "http://localhost:3000/")
        cy.get(".login").click()
        cy.url().should("include", "http://localhost:3000/login")
        cy.visit("http://localhost:3000/")
        cy.get("#wishList").click()
        cy.url().should("include", "http://localhost:3000/wishlist")
        cy.visit("http://localhost:3000/")
        cy.get("#cart").click()
        cy.url().should("include", "http://localhost:3000/cart")

    })
})

describe("renders the home page", () => {
    
    it("able to fetch book form backend", () => {
        cy.visit("http://localhost:3000/")
        cy.contains("Spider's Web")
        cy.contains("Empires of the Monsoon")
        cy.contains("Murder in LaMut")
        cy.contains("The One Tree")
        cy.contains("Gravity")
    })
})

