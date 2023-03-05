/**
 * Interfaz que representa a un jugador del juego Conecta 4. Un jugador tiene un
 * `id`, un `nombre` y un `color` únicos. 
 */
export interface Jugador {
  id: number;
  nombre: string;
  color: string;
}

/**
 * Desarrollo de la clase `Tablero`. Esta clase representa el tablero del juego
 * Conecta 4. El tablero tiene un tamaño fijo de 6 filas y 7 columnas, por eso se declara
 * `filas` y `cols` como `readonly`. El tablero se representa como una matriz de
 * caracteres, donde cada casilla puede contener un espacio vacío `'-'` o una ficha
 * de uno de los jugadores.
*/
export class Tablero {
  private tablero: string[][];
  private readonly filas: number = 6;
  private readonly cols: number = 7;

  /**
   * Constructor de la clase `Tablero`. Se inicializa el tablero con todas las
   * casillas vacías, rellenando la matriz con el carácter `'-'`.
   */
  constructor() {
    this.tablero = new Array(this.filas);
    for (let i = 0; i < this.filas; i++) {
      this.tablero[i] = new Array(this.cols).fill("-");
    }
  }

  /**
   * El método `colocarPieza` coloca una ficha en el tablero en la columna
   * indicada por el parámetro `col`. En el caso de que el valor introducido
   * por pantalla no sea un número válido o que se salga del rango entre 0 y 6,
   * se muestra un mensaje de error por consola y se devuelve `false`. Si la
   * columna está llena, también se muestra un mensaje de error por consola y
   * se devuelve `false`. En caso contrario, se coloca la ficha en la primera
   * casilla vacía de la columna y se devuelve `true`.
   * 
   * @param col Parámetro que almacenará la columna en la que se desea colocar la ficha.
   * @param piece Parametro que almacenará la ficha que se desea colocar, la cual 
   * varía dependiendo del jugador.
   * @returns `true` si la ficha se colocó con éxito en alguna posición de la matriz.
   * En caso contrario, se devuelve `false`.
   */
  public colocarPieza(col: number, piece: string): boolean {
    if (col < 0 || col >= this.cols) {
      console.log("Columna no válida");
      return false;
    }

    for (let fila = this.filas - 1; fila >= 0; fila--) {
      if (this.tablero[fila][col] == "-") {
        this.tablero[fila][col] = piece;
        return true;
      }
    }
    console.log("Columna llena");
    return false;
  }

  /**
   * El método `print` imprime el tablero por consola. Para ello, se recorre la
   * matriz y se imprime cada casilla separada por un espacio. Al final de cada
   * fila se imprime un salto de línea.
   */
  public print() {
    console.log(this.tablero.map((fila) => fila.join(" ")).join("\n"));
  }

  /**
   * El método `comprobarVictoria` comprueba si el jugador actual ha ganado la
   * partida. Para ello, se recorre la matriz y se comprueba si hay 4 fichas
   * iguales en línea, ya sea en horizontal, vertical o diagonal. Cada uno de los 
   * bucles `for` comprueba una de las posibles formas de ganar (el primero
   * lo comprueba por filas, el segundo por columnas, el tercero por diagonal y 
   * cuarto por diagonal invertida.). Si se encuentra una línea de 4 fichas 
   * iguales, se devuelve `true`. En caso contrario, se devuelve `false`.
   * 
   * @param piece Parámetro que almacena la ficha del jugador actual.
   * @returns `true` si el jugador actual ha ganado la partida. En caso contrario,
   * se devuelve `false`.
   */
  public comprobarVictoria(piece: string): boolean {
    for (let fila = 0; fila < this.filas; fila++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.tablero[fila][col] == piece &&
          this.tablero[fila][col + 1] == piece &&
          this.tablero[fila][col + 2] == piece &&
          this.tablero[fila][col + 3] == piece
        ) {
          return true;
        }
      }
    }
    for (let fila = 0; fila < this.filas - 3; fila++) {
      for (let col = 0; col < this.cols; col++) {
        if (
          this.tablero[fila][col] == piece &&
          this.tablero[fila + 1][col] == piece &&
          this.tablero[fila + 2][col] == piece &&
          this.tablero[fila + 3][col] == piece
        ) {
          return true;
        }
      }
    }
    for (let fila = 0; fila < this.filas - 3; fila++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.tablero[fila][col] == piece &&
          this.tablero[fila + 1][col + 1] == piece &&
          this.tablero[fila + 2][col + 2] == piece &&
          this.tablero[fila + 3][col + 3] == piece
        ) {
          return true;
        }
      }
    }
    for (let fila = 3; fila < this.filas; fila++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.tablero[fila][col] == piece &&
          this.tablero[fila - 1][col + 1] == piece &&
          this.tablero[fila - 2][col + 2] == piece &&
          this.tablero[fila - 3][col + 3] == piece
        ) {
          return true;
        }
      }
    }
    return false;
  }
}