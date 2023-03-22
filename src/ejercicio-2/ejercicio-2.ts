// import { Tablero, Jugador} from "./tablero";
// import * as Prompt from 'prompt-sync';
// const prompt = Prompt();

// /**
//  * La función `conecta4()` es la función principal del juego. Se encarga de solicitar
//  * al jugador actual que seleccione una columna en la que colocar su ficha. Una vez
//  * que se ha seleccionado una columna válida, la función llama a la función
//  * `colocarPieza()` de la clase `Tablero` para colocar la ficha en el tablero. Si
//  * el jugador gana el juego, se muestra un mensaje de felicitación y se sale de la
//  * función. Si el jugador no gana, se llama a la función `conecta4()` para solicitar
//  * la entrada del siguiente jugador. En el caso de que la columna seleccionada no
//  * sea válida o esté llena, se vuelve a solicitar al jugador que seleccione una
//  * columna.
//  *
//  * @param Tablero Parámetro que recibe el tablero del juego.
//  * @param jugador Parámetro que recibe el jugador actual.
//  */
// export function conecta4(tablero: Tablero, jugador: Jugador) {
//   const col = parseInt(prompt(`Es el turno del ${jugador.nombre}. Introduce el número de columna en la que quieres poner ficha (0-6): `));
//   if (isNaN(col)) {
//     conecta4(tablero, jugador);
//   } else if (tablero.colocarPieza(col, jugador.color)) {
//     tablero.print();
//     if (tablero.comprobarVictoria(jugador.color)) {
//       console.log(`¡${jugador.nombre} ha ganado!`);
//       return;
//     }
//     if (jugador == jugador1) {
//       conecta4(tablero, jugador2);
//     } else {
//       conecta4(tablero, jugador1);
//     }
//   } else {
//     conecta4(tablero, jugador);
//   }
// }

// const jugador1: Jugador = {
//   id: 1,
//   nombre: "Jugador 1",
//   color: "O",
// };

// const jugador2: Jugador = {
//   id: 2,
//   nombre: "Jugador 2",
//   color: "X",
// };
// const tablero: Tablero = new Tablero();

// // conecta4(tablero, jugador1);
