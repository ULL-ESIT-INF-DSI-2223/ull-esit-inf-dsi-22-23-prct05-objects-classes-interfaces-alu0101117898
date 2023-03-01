
import 'mocha';
import {expect} from 'chai';
import {Racionales} from "../src/modificacion-2";

describe ('--Tests Ejercicio 2 PE101--', () => {
    describe('Simplificar', () => {
        const rational1 = new Racionales(4, 8);
        const rational2 = new Racionales(7,9);
        it('Simplifica los números racionales', () => {
          rational1.simplificar();
          expect(rational1.numerador).to.be.equal(1);
          expect(rational1.denominador).to.be.equal(2);
        });
        it ('Inversa de números racionales', () =>)
      });
});
