/*
import 'mocha';
import {expect} from 'chai';
import {Racionales} from "../src/modificacion-2";

const rational1 = new Racionales(4, 8); const invRational1 = new Racionales(2, 1);
const rational2 = new Racionales(7, 9); const invRational2 = new Racionales(9, 7);
const sum1_2 = new Racionales(23, 18);const sub1_2 = new Racionales(-5, 18); 
const mult1_2 = new Racionales(7, 18); const div1_2 = new Racionales(9, 14); 

describe ('--Tests Ejercicio 2 PE101--', () => {
  it('Simplifica los números racionales.', () => { 
    rational1.simplificar();
    expect(rational1.numerador).to.be.equal(1);
    expect(rational1.denominador).to.be.equal(2);
  });

  it ('Inversa de números racionales.', () => {
    expect(rational1.inversa()).to.be.eqls(invRational1);
    expect(rational2.inversa()).to.be.eqls(invRational2);
  });

  it ('Comprobar que los números racionales no son enteros.', () => {
    expect(() => new Racionales(3.5, 2)).to.throw(Error);
  });

  it ('Comprobar que un número racional tiene un denominador = 0.', () => {
    expect(() => new Racionales(8, 0)).to.throw(Error);
  });

  it ('rational1.add(rational2) returns "Racionales { numerador: 23 , denominador: 18 } ".', () => {
    expect(rational1.add(rational2)).to.be.eqls(sum1_2);
  });
  it ('rational1.sub(rational2) returns "Racionales { numerador: -5 , denominador: 18 } ".', () => {
    expect(rational1.sub(rational2)).to.be.eqls(sub1_2);
  });
  it ('rational1.mult(rational2) returns "Racionales { numerador: 7 , denominador: 18 } ".', () => {
    expect(rational1.mult(rational2)).to.be.eqls(mult1_2);
  });
  it ('rational1.div(rational2) returns "Racionales { numerador: 9 , denominador: 14 } ".', () => {
    expect(rational1.div(rational2)).to.be.eqls(div1_2);
  });
  it ('rational1.toString returns "1/2".', () => {
    expect(rational1.toString()).to.be.equal('1/2');
  });
  it ('rational1.toFixed(2) returns 0.5.', () => {
    expect(rational1.toFixed(2)).to.be.equal(0.5);
  });
});
*/
