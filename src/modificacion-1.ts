/**
 * La función `productTable` recibe un `number` por pantalla y devuelve
 * la tabla de multiplicar hasta `n` y cada una compuesta de `n` componentes.
 * @param n Almacena el tamaño de la tabla de multiplicar y el 
 * número de números calculados para cada una de ellas.
 * @returns La tabla de multiplicar. Se inizializa una matriz `result` vacía que
 * se va a ir rellenando. Si el número que se pasa por parámetro es menor que 1 o 
 * decimal, la función devuelve `undefined`. En caso contrario, se realizan 2 bucles
 * `for` anidados, el primero para saltar entre las diferentes filas e ir aumentando 
 * en 1 el número a multiplicar. También, se declara `fila` de manera auxiliar que va 
 * a ir almacenando cada una de las tablas de multiplicar para ir añadiéndolas a `result`.
 */
export function productTable(n: number): number[][] | undefined {
    const result: number[][] = [];
    if (n <= 1 || n % 1 != 0) {
        return undefined;
    }
    for (let i = 1; i <= n; i++) {
      const fila: number[] = [];
      for (let j = 1; j <= n; j++) {
        fila.push(i * j);
      }
      result.push(fila);
    }
    return result;
  }

// console.log(productTable(1));
// console.log(productTable(2));
// console.log(productTable(2.4))