describe('Go to App URL', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Home BTN & Order Pizza BTN Exist', () => {
        const HomeBTN = cy.get('button[id=Home]')
        const OrderPizzaBTN = cy.get('button[id=order-pizza]')

        HomeBTN.should('exist')
        OrderPizzaBTN.should('exist')
    })
})

describe('When Order Pizza is clicked, You land on Pizza Form', () => {

    it('Clicking Order Pizza BTN navigates to pizza Form', () => {
        const OrderPizzaBTN = cy.get('button[id=order-pizza]')

        OrderPizzaBTN.click()
    })
})

describe('Testing some Form Inputs', () => {
    it('Name Input exist & your able to type inside it', () => {
        const nameInput = cy.get('input[id=name-input]')
        nameInput.should('exist').type('Peter Griffen')
            .should('have.value', 'Peter Griffen')
    })

    it('Select A Size of Pizza', () => {
        const PizzaSize  = cy.get('select[id=size-dropdown]')
        PizzaSize.select('x-large').should('have.value', 'x-large')
    })

    it('Should Check if 4 Sauces exist ', () => {
        const
    })
})