/**
 * Se define la interfaz `IArtista` que contiene los atributos del objeto artista.
 * Se declaran 3 variables: `nombreArtista`, `oyentesMensuales` y `discografia`, donde
 * esta última es un array de objetos de tipo `IDisco`, ya que un artista puede tener
 * más de un disco.
 */
export interface IArtista {
  nombreArtista: string;
  oyentesMensuales: number;
  discografia: IDisco[];
}

/**
 * Se define la interfaz `IDisco` que contiene los atributos del objeto disco.
 * Se declaran 3 variables: `nombreDisco`, `anioPublicacion` y `canciones`, donde
 * esta última es un array de objetos de tipo `ICancion`, ya que un disco puede tener
 * más de una canción.
 */
export interface IDisco {
  nombreDisco: string;
  anioPublicacion: number;
  canciones: ICancion[];
}

/**
 * Se define la interfaz `ICancion` que contiene los atributos del objeto canción.
 * Se declaran 5 variables: `nombreCancion`, `duracion`, `generos`, `single` y `reproducciones`.
 * `generos` es un array de strings, ya que una canción puede tener más de un género.
 */
export interface ICancion {
  nombreCancion: string;
  duracion: number;
  generos: string[];
  single: boolean;
  reproducciones: number;
}

/**
 * Se define la clase `BibliotecaMusical` que contiene los métodos `agregarArtista`,
 * `buscarArtistas`, `buscarDiscos`, `buscarCanciones`, `calcularNumCanciones`,
 * `calcularDuracionDisco`, `calcularReproduccionesDisco` y `mostrarInformacion`.
*/
export class BibliotecaMusical {
  artistas: IArtista[];
  /**
   * Se inicializa el constructor de la clase `BibliotecaMusical` con un array vacío.
   */
  constructor() {
    this.artistas = [];
  }

  /**
   * El método `agregarArtista` recibe un parámetro de tipo `IArtista` y lo añade al array
   * `artistas`, definido en el constructor.
   * @param artista Almacena el objeto de tipo `IArtista` que se pasa como parámetro.
   */
  agregarArtista(artista: IArtista): void {
    this.artistas.push(artista);
  }

  /**
   * El método `buscarArtistas` recibe un parámetro de tipo `string`, que es el nombre del artista
   * que se desea buscar. Se utiliza el método `filter` para filtrar los artistas que coincidan.
   * @param nombre Almacena el nombre del artista que se pasa como parámetro, el cual se quiere buscar.
   * @returns La tabla resultante de aplicar el método `filter` al array `artistas`. Este último método
   * busca los artistas que coincidan con el nombre pasado como parámetro. En el caso de que no se encuentre,
   * se devuelve una tabla vacía. 
   */
  buscarArtistas(nombre: string): IArtista[] {
    return this.artistas.filter((artista) =>
      artista.nombreArtista.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  /**
   * El método `buscarDiscos` recibe un parámetro de tipo `string`, que es el nombre del disco
   * que se desea buscar. Se utiliza el método `forEach` para recorrer los artistas y los discos de cada uno.
   * @param nombre Almacena el nombre del disco que se pasa como parámetro, el cual se quiere buscar.
   * @returns La tabla resultante de los discos encontrados con el nombre `nombre`. En el caso de que encuentre,
   * añade al vector `discosEncontrados` dicho disco, ya que puede haber más de uno. En el caso de que no se encuentre,
   * se devuelve una tabla vacía.
   */
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

  /**
   * El método `buscarCanciones` recibe un parámetro de tipo `string`, que es el nombre de la canción 
   * que se desea buscar. Se utiliza el método `forEach` para recorrer cada uno de los artistas, los discos
   * de dichos artistas, y las canciones de cada disco.
   * @param nombre El nombre de la canción que se pasa como parámetro, la cual se quiere buscar.
   * @returns La tabla resultante de las canciones encontradas con el nombre `nombre`. En el caso de que encuentre,
   * añade al vector `cancionesEncontradas` dicha canción, ya que puede haber más de una. En el caso de que no se encuentre,
   * se devuelve una tabla vacía.
   */
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

  /**
   * El método `calcularNumCanciones` recibe un parámetro de tipo `IDisco`, para calcular el 
   * número de canciones que tiene un disco de un artista.
   * @param disco Almacena el objeto de tipo `IDisco` que se pasa como parámetro.
   * @returns Un tipo `number` que es el número de canciones que tiene ese disco. Se aplica el metodo `length`
   * sobre el array `canciones` del objeto `disco` para obtener el número de canciones.
   */
  calcularNumCanciones(disco: IDisco): number {
    return disco.canciones.length;
  }

  /**
   * El metodo `calcularDuracionDisco` recibe un parámetro de tipo `IDisco`, para calcular la duración
   * total de un disco de un artista.
   * @param disco Almacena el objeto de tipo `IDisco` que se pasa como parámetro.
   * @returns Un tipo `number` que es la duración total del disco. Se aplica el método `reduce` sobre el array
   * `canciones` del objeto `disco` para obtener la duración total del disco. El método `reduce` recibe una función
   * que recibe dos parámetros, el `acumulado` y `la canción`, y devuelve la suma de ambos.
   */
  calcularDuracionDisco(disco: IDisco): number {
    return disco.canciones.reduce((acumulado, cancion) => acumulado + cancion.duracion, 0);
  }

  /**
   * El método `calcularReproduccionesDisco` recibe un parámetro de tipo `IDisco`, para calcular el número
   * total de reproducciones de un disco de un artista.
   * @param disco Almacena el objeto de tipo `IDisco` que se pasa como parámetro.
   * @returns Un tipo `number` que es el número total de reproducciones del disco. Se aplica el método `reduce` sobre el array
   * `canciones` del objeto `disco` para obtener el número total de reproducciones del disco. El método `reduce` recibe una función
   * que recibe dos parámetros, el `acumulado` y `la canción`, y devuelve la suma de ambos.
   */
  calcularReproduccionesDisco(disco: IDisco): number {
    return disco.canciones.reduce((acumulado, cancion) => acumulado + cancion.reproducciones, 0);
  }

  /**
   * `mostrarInformacion` es un método que muestra por consola la información de la biblioteca musical.
   * Se utiliza el método `forEach` 3 veces concatenadas para recorrer cada uno de los artistas, los discos de dichos artistas,
   * y las canciones de cada disco.
   */
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
