import 'mocha';
import {expect} from 'chai';
import {productTable} from "../src/modificacion-1";

describe ('--Tests Ejercicio 1 PE101--', () => {
    it('productTable(1) returns undefined', () => {
        expect(productTable(1)).to.be.equal(undefined);
    });
    it('productTable(2.4) returns undefined', () => {
        expect(productTable(2.4)).to.be.equal(undefined);
    });
    it('productTable(2) returns [[1, 2], [2, 4]]', () => {
        expect(productTable(2)).to.be.eqls([[1, 2], [2, 4]]);
    });
    it('productTable(3) returns [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
        expect(productTable(3)).to.be.eqls([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
    });
    it('productTable(4) returns [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]', () => {
        expect(productTable(4)).to.be.eqls([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
    });
    it('productTable(5) returns [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]', () => {
        expect(productTable(5)).to.be.eqls([[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]);
    });   
});
