// import 'mocha';
// import {expect} from 'chai';
// import { Tablero} from "../src/ejercicio-2/tablero";

// const tablero: Tablero = new Tablero();
// const tablero2: Tablero = new Tablero();
// const tablero3: Tablero = new Tablero();
// const tablero4: Tablero = new Tablero();

// for(let i = 0; i < 6; i++){
//   tablero.colocarPieza(0, "O");
// }
// for(let i = 0; i < 2; i++){
//   tablero2.colocarPieza(0, "O");
// }
// for(let i = 0; i < 4; i++){
//   tablero3.colocarPieza(0, "O");
//   tablero4.colocarPieza(i, "O");
// }


// describe ('--Ejercicio 2 Pruebas-- ', () => { 
//   it('Se comprueba que, si se sale del tablero, devuelve el error.', () => {
//     expect(tablero.colocarPieza(7, "O")).to.be.equal(false);
//   });
//   it('Se comprueba que, si se intenta introducir un valor en una columna ocupada, devuelve false.', () => {
//     expect(tablero.colocarPieza(0, "O")).to.be.equal(false);
//   });
//   it('Comprueba si un jugador no ha ganado todavía el juego.', () => {
//     expect(tablero2.comprobarVictoria("O")).to.be.equal(false);
//   });
//   it('Comprueba si un jugador ha ganado teniendo 4 fichas en forma de columna.', () => {
//     expect(tablero3.comprobarVictoria("O")).to.be.equal(true);
//   });
//   it('Comprueba si un jugador ha ganado teniendo 4 fichas en forma de fila.', () => {
//     expect(tablero4.comprobarVictoria("O")).to.be.equal(true);
//   });
//   it('Se comprueba que se imprime correctamente `tablero3` con el método `print()`.', () => {
//     expect(tablero3.print()).to.equal(undefined);
//   });
// });
