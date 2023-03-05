# Práctica 5 - Objetos, Clases e Interfases - Ricardo Fariña Mesa


## Introducción

En esta práctica se entra en profundidad en los objetos, clases e interfaces dle lenguaje TypeScript.

## Objetivos

Se busca desarrollar dos ejercicios en TypeScript utilizando objetos, clases e interfaces, para así ir desarrollando nuestros
conocimientos sobre las diferentes herramientas que presenta este lenguaje.

## Desarrollo

### Ejercicio 1 - Biblioteca musical

En este ejercicio se va a desarrollar una clase `BibliotecaMusical` que va a almacenar una lista de artistas, álbumes y canciones.

Se define la interfaz `IArtista` que contiene los atributos del objeto artista. Se declaran 3 variables: `nombreArtista`, `oyentesMensuales` y `discografia`, donde esta última es un array de objetos de tipo `IDisco`, ya que un artista puede tener más de un disco.

```
export interface IArtista {
  nombreArtista: string;
  oyentesMensuales: number;
  discografia: IDisco[];
}
```

Se define la interfaz `IDisco` que contiene los atributos del objeto disco. Se declaran 3 variables: `nombreDisco`, `anioPublicacion` y `canciones`, donde esta última es un array de objetos de tipo `ICancion`, ya que un disco puede tener más de una canción.

```
export interface IDisco {
  nombreDisco: string;
  anioPublicacion: number;
  canciones: ICancion[];
}
```

Se define la interfaz `ICancion` que contiene los atributos del objeto canción. Se declaran 5 variables: `nombreCancion`, `duracion`, `generos`, `single` y `reproducciones`. `generos` es un array de strings, ya que una canción puede tener más de un género.

```
export interface ICancion {
  nombreCancion: string;
  duracion: number;
  generos: string[];
  single: boolean;
  reproducciones: number;
}
```

Se define la clase `BibliotecaMusical` que contiene los métodos `agregarArtista`, `buscarArtistas`, `buscarDiscos`, `buscarCanciones`, `calcularNumCanciones`, `calcularDuracionDisco`, `calcularReproduccionesDisco` y `mostrarInformacion`.

El método `agregarArtista` recibe un objeto de tipo `IArtista` y lo añade a la lista de artistas.

El método `buscarArtistas` recibe un parámetro de tipo `string`, que es el nombre del artista que se desea buscar. Se utiliza el método `filter` para filtrar los artistas que coincidan.
Devuelve la tabla resultante de aplicar el método `filter` al array `artistas`. Este último método busca los artistas que coincidan con el nombre pasado como parámetro. En el caso de que no se encuentre, se devuelve una tabla vacía. 

El método `buscarDiscos` recibe un parámetro de tipo `string`, que es el nombre del disco
que se desea buscar. Se utiliza el método `forEach` para recorrer los artistas y los discos de cada uno. Devuelve la tabla resultante de los discos encontrados con el nombre `nombre`. En el caso de que encuentre, añade al vector `discosEncontrados` dicho disco, ya que puede haber más de uno. En el caso de que no se encuentre, se devuelve una tabla vacía.

El método `buscarCanciones` recibe un parámetro de tipo `string`, que es el nombre de la canción que se desea buscar. Se utiliza el método `forEach` para recorrer cada uno de los artistas, los discosde dichos artistas, y las canciones de cada disco. Devuelve la tabla resultante de las canciones encontradas con el nombre `nombre`. En el caso de que encuentre, añade al vector `cancionesEncontradas` dicha canción, ya que puede haber más de una. En el caso de que no se encuentre, se devuelve una tabla vacía.

El método `calcularNumCanciones` recibe un parámetro de tipo `IDisco`, para calcular el 
número de canciones que tiene un disco de un artista. Devuelve un tipo `number` que es el número de canciones que tiene ese disco. Se aplica el metodo `length` sobre el array `canciones` del objeto `disco` para obtener el número de canciones.

El metodo `calcularDuracionDisco` recibe un parámetro de tipo `IDisco`, para calcular la duración total de un disco de un artista. Devuelve un tipo `number` que es la duración total del disco. Se aplica el método `reduce` sobre el array `canciones` del objeto `disco` para obtener la duración total del disco. El método `reduce` recibe una función que recibe dos parámetros, el `acumulado` y `la canción`, y devuelve la suma de ambos.

El método `calcularReproduccionesDisco` recibe un parámetro de tipo `IDisco`, para calcular el número total de reproducciones de un disco de un artista. Devuelve un tipo `number` que es el número total de reproducciones del disco. Se aplica el método `reduce` sobre el array `canciones` del objeto `disco` para obtener el número total de reproducciones del disco. El método `reduce` recibe una función que recibe dos parámetros, el `acumulado` y `la canción`, y devuelve la suma de ambos.

`mostrarInformacion` es un método que muestra por consola la información de la biblioteca musical. Se utiliza el método `forEach` 3 veces concatenadas para recorrer cada uno de los artistas, los discos de dichos artistas, y las canciones de cada disco.

```
export class BibliotecaMusical {
  artistas: IArtista[];
  constructor() {
    this.artistas = [];
  }

  agregarArtista(artista: IArtista): void {
    this.artistas.push(artista);
  }

  buscarArtistas(nombre: string): IArtista[] {
    return this.artistas.filter((artista) =>
      artista.nombreArtista.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  buscarDiscos(nombre: string): IDisco[] {
    const discosEncontrados: IDisco[] = [];
    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        if (disco.nombreDisco.toLowerCase().includes(nombre.toLowerCase())) {
          discosEncontrados.push(disco);
        }
      });
    });
    return discosEncontrados;
  }

  buscarCanciones(nombre: string): ICancion[] {
    const cancionesEncontradas: ICancion[] = [];
    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        disco.canciones.forEach((cancion) => {
          if (cancion.nombreCancion.toLowerCase().includes(nombre.toLowerCase())) {
            cancionesEncontradas.push(cancion);
          }
        });
      });
    });
    return cancionesEncontradas;
  }

  calcularNumCanciones(disco: IDisco): number {
    return disco.canciones.length;
  }

  calcularDuracionDisco(disco: IDisco): number {
    return disco.canciones.reduce((acumulado, cancion) => acumulado + cancion.duracion, 0);
  }

  calcularReproduccionesDisco(disco: IDisco): number {
    return disco.canciones.reduce((acumulado, cancion) => acumulado + cancion.reproducciones, 0);
  }

  mostrarInformacion(): void {
    console.table(this.artistas);
    this.artistas.forEach((artista) =>  {
      console.table(artista);
      artista.discografia.forEach((disco) => {
        console.table(disco);
        disco.canciones.forEach((cancion) => {
          console.table(cancion);
        });
      });
    });
  }
}
```

### Ejercicio 2 - Conecta 4

En este ejercicio se han desarrollado 2 ficheros, `tablero.ts`, que almacena el objeto `Jugador` y la clase `Tablero`, con sus respectivos métodos, y ejercicio-2.ts, que contiene el código principal del ejercicio donde se realiza el juego a través de la función `conecta4`.

La interfaz `Jugador` representa a un jugador del juego Conecta 4. Un jugador tiene un
`id`, un `nombre` y un `color` únicos. 
```
export interface Jugador {
  id: number;
  nombre: string;
  color: string;
}
```

Desarrollo de la clase `Tablero`. Esta clase representa el tablero del juego
Conecta 4. El tablero tiene un tamaño fijo de 6 filas y 7 columnas, por eso se declara
`filas` y `cols` como `readonly`. El tablero se representa como una matriz de
caracteres, donde cada casilla puede contener un espacio vacío `'-'` o una ficha
de uno de los jugadores.

El constructor de la clase `Tablero` inicializa el tablero con todas las
casillas vacías, rellenando la matriz con el carácter `'-'`.

El método `colocarPieza` coloca una ficha en el tablero en la columna
indicada por el parámetro `col`. En el caso de que el valor introducido
por pantalla no sea un número válido o que se salga del rango entre 0 y 6,
se muestra un mensaje de error por consola y se devuelve `false`. Si la
columna está llena, también se muestra un mensaje de error por consola y
se devuelve `false`. En caso contrario, se coloca la ficha en la primera
casilla vacía de la columna y se devuelve `true`.
`col` Almacena la columna en la que se desea colocar la ficha.
`piece` Almacena la ficha que se desea colocar, la cual varía dependiendo del jugador.
Devuelve `true` si la ficha se colocó con éxito en alguna posición de la matriz.
En caso contrario, se devuelve `false`.

El método `print` imprime el tablero por consola. Para ello, se recorre la
matriz y se imprime cada casilla separada por un espacio. Al final de cada
fila se imprime un salto de línea.

El método `comprobarVictoria` comprueba si el jugador actual ha ganado la
partida. Para ello, se recorre la matriz y se comprueba si hay 4 fichas
iguales en línea, ya sea en horizontal, vertical o diagonal. Cada uno de los 
bucles `for` comprueba una de las posibles formas de ganar (el primero
lo comprueba por filas, el segundo por columnas, el tercero por diagonal y 
cuarto por diagonal invertida.). Si se encuentra una línea de 4 fichas 
iguales, se devuelve `true`. En caso contrario, se devuelve `false`.

`piece` almacena la ficha del jugador actual.
Devuelve `true` si el jugador actual ha ganado la partida. En caso contrario,
se devuelve `false`.

```
export class Tablero {
  private tablero: string[][];
  private readonly filas: number = 6;
  private readonly cols: number = 7;

  constructor() {
    this.tablero = new Array(this.filas);
    for (let i = 0; i < this.filas; i++) {
      this.tablero[i] = new Array(this.cols).fill("-");
    }
  }

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

  public print() {
    console.log(this.tablero.map((fila) => fila.join(" ")).join("\n"));
  }

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
```

La función `conecta4()` es la función principal del juego. Se encarga de solicitar
al jugador actual que seleccione una columna en la que colocar su ficha. Una vez
que se ha seleccionado una columna válida, la función llama a la función
`colocarPieza()` de la clase `Tablero` para colocar la ficha en el tablero. Si
el jugador gana el juego, se muestra un mensaje de felicitación y se sale de la
función. Si el jugador no gana, se llama a la función `conecta4()` para solicitar
la entrada del siguiente jugador. En el caso de que la columna seleccionada no
sea válida o esté llena, se vuelve a solicitar al jugador que seleccione una
columna.

`tablero` recibe el tablero del juego.
`jugador` recibe el jugador actual.

```
export function conecta4(tablero: Tablero, jugador: Jugador) {
  const col = parseInt(prompt(`Es el turno del ${jugador.nombre}. Introduce el número de columna en la que quieres poner ficha (0-6): `));
  if (isNaN(col)) {
    conecta4(tablero, jugador);
  } else if (tablero.colocarPieza(col, jugador.color)) {
    tablero.print();
    if (tablero.comprobarVictoria(jugador.color)) {
      console.log(`¡${jugador.nombre} ha ganado!`);
      return;
    }
    if (jugador == jugador1) {
      conecta4(tablero, jugador2);
    } else {
      conecta4(tablero, jugador1);
    }
  } else {
    conecta4(tablero, jugador);
  }
}
```
### Ejercicio 1 - PE101

La función `productTable` recibe un `number` por pantalla y devuelve
la tabla de multiplicar hasta `n` y cada una compuesta de `n` componentes.
`n` Almacena el tamaño de la tabla de multiplicar y el número de números calculados para cada una de ellas. 

Devuelve la tabla de multiplicar. Se inizializa una matriz `result` vacía que se va a ir rellenando. Si el número que se pasa por parámetro es menor que 1 o 
decimal, la función devuelve `undefined`. En caso contrario, se realizan 2 bucles
`for` anidados, el primero para saltar entre las diferentes filas e ir aumentando 
en 1 el número a multiplicar. También, se declara `fila` de manera auxiliar que va 
a ir almacenando cada una de las tablas de multiplicar para ir añadiéndolas a `result`.

```
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

```
### Ejercicio 2 - PE101

La clase `Racionales` trabaja con un par de números `numerador` y `denominador`.
Constructor de la clase `Racionales` que deben ser enteros.  A destacar, el denominador debe ser mayor que 0. A través de estos parámetros, se realizarán varias funciones sobre ellos.

El método `mcm` realiza el mínimo común múltiplo entre el numerador y el denominador
a través de un método recursivo. Devuelve el mínimo común múltiplo devolviendo `a` cuando termina la recursividad.

El método`simplificar` reduce un número racional a su equivalente más pequeño. 
Por ejemplo, si se tiene `(5, 15)`, este método, utilizando el método `mcm`, lo reduce a `(1, 5)`.  

El método `inversa` se aplica a un tipo `Racionales` para invertir el numerador por el denominador. Devuelve un tipo `Racionales` pero invirtiendo sus componentes.

El método `add` realiza la suma de dos números `Racionales`. Devuelve la suma de los dos números racionales. Sí o sí calcula la multiplicación de cada uno de los numeradores por el otro denominador.

El método `sub` resta dos `Racionales` entre ellos. Devuelve la resta entre los dos números racionales. Simplemente se llama a `add` pero invirtiendo el signo del segundo numerador.

El método `mult` realiza la multiplicación entre dos `Racionales`. Devuelve la multiplicaición de dos números racionales. Se devuelve la multiplicación entre los numeradores y la multiplicación entre los denominadores.

`div` realiza la división entre dos números `Racionales`. Devuelve la división de dos números racionales. Se llama a la función `mult` pero el segundo número racional se invierte con `inversa`, para así realizar la división.

El método `toString` devuelve un número `Racionales` como un `string`.
Devuelve la cadena `'numerador/denominador'`.

El método `toFixed` devuelve un número resultante de la división entre el numerador y el denominador. Un número resultante entre la división del numerador con el denominador, con `n` decimales, donde `n` es el parámetro que se le pasa al método.

```
export class Racionales {
    public numerador: number;
    public denominador: number;

    constructor(numerador: number, denominador: number) {
      if (denominador == 0) {
          throw new Error('El denominador no puede ser cero.');
      }
      if (numerador % 1 != 0 || denominador % 1 != 0) {
          throw new Error('El racional tiene que ser de tipo entero.');
        }
      this.numerador = numerador;
      this.denominador = denominador;
      this.simplificar();
    }

    public mcm(a: number, b: number): number {
      if (b == 0) {
          return a;
      }
      return this.mcm(b, a % b);
    }

    public simplificar(): void {
      const mcm = this.mcm(Math.abs(this.numerador), this.denominador);
      this.numerador /= mcm;
      this.denominador /= mcm;
    }

    public inversa(): Racionales {
      return new Racionales(this.denominador, this.numerador);
    }

    public add(this2: Racionales): Racionales {
      const auxNumerador = this.numerador * this2.denominador + this.denominador * this2.numerador;
      const auxDenominador = this.denominador * this2.denominador;
      return new Racionales(auxNumerador, auxDenominador);
    }
    

    public sub(this2: Racionales): Racionales {
      return this.add(new Racionales(-this2.numerador, this2.denominador));
    }
  
    public mult(this2: Racionales): Racionales {
      return new Racionales(this.numerador * this2.numerador, this.denominador * this2.denominador);
    }

    public div(this2: Racionales): Racionales {
      return this.mult(this2.inversa());
    }

    public toString(): string {
      return `${this.numerador}/${this.denominador}`;
    }

    public toFixed(n: number): number {
      const recursiva = this.numerador / this.denominador;
      return parseFloat(recursiva.toFixed(n));
    }
} 
```


## Tests

Se han realizado una serie de tests para cada una de las funciones y métodos de cada una de las clases implementadas en los diferentes ejercicios. Se ha realizado la instalación de `Coveralls` para comprobar el porcentaje de cobertura de los tests realizados, aunque todavía posee algún fallo al finalizar su ejecución. Cabe destacar que no se han mostrado todas las tablas del ejercicio 1, pero se muestra las diferentes tablas al ejecutar `mostrarInformacion`. El resto de ellas, con las que se realizan los tests se encuentran comentadas dentro de `ejercicio-1.spec.ts`.

En el caso del ejercicio de Conecta 4, se han realizado una serie de tests para comprobar su correcto funcionamiento, de que no se puedan introducir fichas fuera del tablero o en una columna llena, así como la función `comprobarVictoria`. En el caso de la ejecución por consola, se encuentra dentro de `ejercicio-2.ts` comentada la línea `conecta4(tablero, jugador1)`, para que no se ejecute al ejecutar los tests.

```
[~/practica-5/practica5(main)]$npm run test

> practica-5@1.0.0 test
> mocha

┌─────────┬───────────────┬──────────────────┬──────────────┐
│ (index) │ nombreArtista │ oyentesMensuales │ discografia  │
├─────────┼───────────────┼──────────────────┼──────────────┤
│    0    │    'Queen'    │     10005800     │ [ [Object] ] │
│    1    │ 'The Beatles' │     2000000      │ [ [Object] ] │
└─────────┴───────────────┴──────────────────┴──────────────┘
┌──────────────────┬──────────┬──────────┐
│     (index)      │    0     │  Values  │
├──────────────────┼──────────┼──────────┤
│  nombreArtista   │          │ 'Queen'  │
│ oyentesMensuales │          │ 10005800 │
│   discografia    │ [Object] │          │
└──────────────────┴──────────┴──────────┘
┌─────────────────┬──────────┬──────────┬────────────────────────┐
│     (index)     │    0     │    1     │         Values         │
├─────────────────┼──────────┼──────────┼────────────────────────┤
│   nombreDisco   │          │          │ 'A Night at the Opera' │
│ anioPublicacion │          │          │          1975          │
│    canciones    │ [Object] │ [Object] │                        │
└─────────────────┴──────────┴──────────┴────────────────────────┘
┌────────────────┬────────┬───────┬─────────────────────┐
│    (index)     │   0    │   1   │       Values        │
├────────────────┼────────┼───────┼─────────────────────┤
│ nombreCancion  │        │       │ 'Bohemian Rhapsody' │
│    duracion    │        │       │         354         │
│    generos     │ 'Rock' │ 'Pop' │                     │
│     single     │        │       │        true         │
│ reproducciones │        │       │      10000000       │
└────────────────┴────────┴───────┴─────────────────────┘
┌────────────────┬────────┬───────┬─────────────────────────┐
│    (index)     │   0    │   1   │         Values          │
├────────────────┼────────┼───────┼─────────────────────────┤
│ nombreCancion  │        │       │ "You're My Best Friend" │
│    duracion    │        │       │           155           │
│    generos     │ 'Rock' │ 'Pop' │                         │
│     single     │        │       │          false          │
│ reproducciones │        │       │         5000000         │
└────────────────┴────────┴───────┴─────────────────────────┘
┌──────────────────┬──────────┬───────────────┐
│     (index)      │    0     │    Values     │
├──────────────────┼──────────┼───────────────┤
│  nombreArtista   │          │ 'The Beatles' │
│ oyentesMensuales │          │    2000000    │
│   discografia    │ [Object] │               │
└──────────────────┴──────────┴───────────────┘
┌─────────────────┬──────────┬──────────┬──────────────┐
│     (index)     │    0     │    1     │    Values    │
├─────────────────┼──────────┼──────────┼──────────────┤
│   nombreDisco   │          │          │ 'Abbey Road' │
│ anioPublicacion │          │          │     1969     │
│    canciones    │ [Object] │ [Object] │              │
└─────────────────┴──────────┴──────────┴──────────────┘
┌────────────────┬────────┬─────────────────┐
│    (index)     │   0    │     Values      │
├────────────────┼────────┼─────────────────┤
│ nombreCancion  │        │ 'Come Together' │
│    duracion    │        │       259       │
│    generos     │ 'Rock' │                 │
│     single     │        │      true       │
│ reproducciones │        │     850000      │
└────────────────┴────────┴─────────────────┘
┌────────────────┬────────┬───────┬─────────────┐
│    (index)     │   0    │   1   │   Values    │
├────────────────┼────────┼───────┼─────────────┤
│ nombreCancion  │        │       │ 'Something' │
│    duracion    │        │       │     181     │
│    generos     │ 'Rock' │ 'Pop' │             │
│     single     │        │       │    true     │
│ reproducciones │        │       │   700000    │
└────────────────┴────────┴───────┴─────────────┘


  --Ejercicio 1 Pruebas--
    ✔ Se ha encontrado el disco que contiene la palabra 'Opera'
    ✔ Se ha encontrado la canción que contiene la palabra 'Bohemian'
    ✔ biblioteca.calcularDuracionDisco(artista2.discografia[0]) returns 440
    ✔ biblioteca.calcularDuracionDisco(artista2.discografia[0]) returns 509
    ✔ biblioteca.calcularReproduccionesDisco(artista2.discografia[0]) returns 1550000
    ✔ biblioteca.calcularReproduccionesDisco(artista1.discografia[0]) returns 15000000
    ✔ biblioteca.calcularNumCanciones(artista2.discografia[0]) returns 2
    ✔ biblioteca.calcularNumCanciones(artista1.discografia[0]) returns 2

  --Ejercicio 2 Pruebas-- 
Columna no válida
    ✔ Se comprueba que, si se sale del tablero, devuelve el error.
Columna llena
    ✔ Se comprueba que, si se intenta introducir un valor en una columna ocupada, devuelve false.
    ✔ Comprueba si un jugador no ha ganado todavía el juego.
    ✔ Comprueba si un jugador ha ganado teniendo 4 fichas en forma de columna.
    ✔ Comprueba si un jugador ha ganado teniendo 4 fichas en forma de fila.
- - - - - - -
- - - - - - -
O - - - - - -
O - - - - - -
O - - - - - -
O - - - - - -
    ✔ Se comprueba que se imprime correctamente `tablero3` con el método `print()`.

  --Tests Ejercicio 1 PE101--
    ✔ productTable(1) returns undefined
    ✔ productTable(2.4) returns undefined
    ✔ productTable(2) returns [[1, 2], [2, 4]]
    ✔ productTable(3) returns [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
    ✔ productTable(4) returns [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
    ✔ productTable(5) returns [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]

  --Tests Ejercicio 2 PE101--
    ✔ Simplifica los números racionales.
    ✔ Inversa de números racionales.
    ✔ Comprobar que los números racionales no son enteros.
    ✔ Comprobar que un número racional tiene un denominador = 0.
    ✔ rational1.add(rational2) returns "Racionales { numerador: 23 , denominador: 18 } ".
    ✔ rational1.sub(rational2) returns "Racionales { numerador: -5 , denominador: 18 } ".
    ✔ rational1.mult(rational2) returns "Racionales { numerador: 7 , denominador: 18 } ".
    ✔ rational1.div(rational2) returns "Racionales { numerador: 9 , denominador: 14 } ".
    ✔ rational1.toString returns "1/2".
    ✔ rational1.toFixed(2) returns 0.5.


  30 passing (37ms)

```

## Conclusiones

A través del desarrollo de los diferentes ejercicios propuestos, tanto dentro del aula como los del informe, se ha conseguido indagar en el desarrollo de diferentes clases con sus correspondientes objetos, así como el uso de `interface` para declarar objetos. También se ha conseguido entrar en mayor profundidad en los diferentes tests y desarrollarlos de una manera más compleja, además de la introducción de `Coveralls`, para así comprobar la cobertura de los tests.

## Bibliografía

  [Usos y ejemplos de `console.table()`.](https://developer.mozilla.org/en-US/docs/Web/API/console/table)