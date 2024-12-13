import pretty from 'pretty'
import { render } from '@testing-library/react'
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
    it(`should have an h2 element with the test
        "Simple Calculator"`, () => {
        render(<Calculator />)

        const h2 = document.querySelector('h2');


        if (h2) {
            expect(h2.textContent).toBe("Simple Calculator")
        }
    })

    it('should initially display a total count of 0', () => {
        render (<Calculator />)

        const cardText = document.querySelector('.card-text');

        if(cardText){
            expect(cardText.textContent).toBe("Total: 0")
        }
    })

    it('should match match the snapshot', ()=> {
        render(<Calculator />)

        const calculatorDiv = document.querySelector('.calculator')

        if(calculatorDiv){
            expect(pretty(calculatorDiv.innerHTML)).toMatchSnapshot()
        }
    })


})