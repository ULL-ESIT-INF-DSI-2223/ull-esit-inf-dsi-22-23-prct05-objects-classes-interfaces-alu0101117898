/** 
 * La clase `Racionales` trabaja con un par de números `numerador` y `denominador`.
 */
export class Racionales {
    public numerador: number;
    public denominador: number;
    /**
     * Constructor de la clase `Racionales` que deben ser enteros. 
     * A destacar, el denominador debe ser mayor que 0. A través de 
     * estos parámetros, se realizarán varias funciones sobre ellos.
     * @param numerador Almacena el numerador del número racional.
     * @param denominador Almacena el denominador del número racional.
     */
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
    /**
     * El método `mcm` realiza el mínimo común múltiplo entre el numerador y el denominador
     * a través de un método recursivo.
     * @param a Almacena el numerador.
     * @param b Almacena el denominador.
     * @returns el mínimo común múltiplo devolviendo `a` cuando termina la recursividad.
     */
    public mcm(a: number, b: number): number {
      if (b == 0) {
          return a;
      }
      return this.mcm(b, a % b);
    }
    /**
     * El método`simplificar` reduce un número racional a su equivalente más pequeño. 
     * Por ejemplo, si se tiene (5, 15), este método, utilizando el método `mcm`, lo reduce
     * a (1, 5).  
     */
    public simplificar(): void {
      const mcm = this.mcm(Math.abs(this.numerador), this.denominador);
      this.numerador /= mcm;
      this.denominador /= mcm;
    }

    /**
     * El método `inversa` se aplica a un tipo `Racionales` para invertir el numerador por el 
     * denominador.
     * @returns Un tipo `Racionales` pero invirtiendo sus componentes.
     */
    public inversa(): Racionales {
      return new Racionales(this.denominador, this.numerador);
    }

    /**
     * El método `add` realiza la suma de dos números `Racionales`.
     * @param this2 Se almacena el número racional que le pasamos como parámetro.
     * @returns La suma de los dos números racionales. Sí o sí calcula la multiplicación
     * de cada uno de los numeradores por el otro denominador.
     */
    public add(this2: Racionales): Racionales {
      const auxNumerador = this.numerador * this2.denominador + this.denominador * this2.numerador;
      const auxDenominador = this.denominador * this2.denominador;
      return new Racionales(auxNumerador, auxDenominador);
    }
    
    /**
     * El método `sub` resta dos `Racionales` entre ellos.
     * @param this2 Almacena el racional que va a restar como parámetro.
     * @returns La resta entre los dos números racionales. Simplemente se llama a `add` pero invirtiendo
     * el signo del segundo numerador.
     */
    public sub(this2: Racionales): Racionales {
      return this.add(new Racionales(-this2.numerador, this2.denominador));
    }
  
    /**
     * El método `mult` realiza la multiplicación entre dos `Racionales`.
     * @param this2 Se almacena el número racional que le pasamos como parámetro.
     * @returns La multiplicaición de dos números racionales. Se devuelve la multiplicación
     * entre los numeradores y la multiplicación entre los denominadores.
     */
    public mult(this2: Racionales): Racionales {
      return new Racionales(this.numerador * this2.numerador, this.denominador * this2.denominador);
    }
  
    /**
     * `div` realiza la división entre dos números `Racionales`.
     * @param this2 Se almacena el número racional que le pasamos como parámetro.
     * @returns La división de dos números racionales. Se llama a la función `mult` pero el segundo número 
     * racional se invierte con `inversa`, para así realizar la división.
     */
    public div(this2: Racionales): Racionales {
      return this.mult(this2.inversa());
    }

    /**
     * El método `toString` devuelve un número `Racionales` como un `string`.
     * @returns La cadena `'numerador/denominador'`.
     */
    public toString(): string {
      return `${this.numerador}/${this.denominador}`;
    }

    /**
     * El método `toFixed` devuelve un número resultante de la división entre el numerador y el denominador.
     * @param n Parámetro que se le pasa a la función para que el método devuelva `n` decimales.
     * @returns Un número resultante entre la división del numerador con el denominador, con `n` decimales.
     */
    public toFixed(n: number): number {
      const recursiva = this.numerador / this.denominador;
      return parseFloat(recursiva.toFixed(n));
    }
} 


/*
const racional1 = new Racionales(4, 8);
const racional2 = new Racionales(7, 9);
console.log(racional1); 
console.log(racional2); 
console.log()
console.log('La inversa de ',racional2, 'es ', racional2.inversa());
console.log('El resultado de la suma es', racional1.add(racional2)); 
console.log('El resultado de la resta es', racional1.sub(racional2)); 
console.log('El resultado de la multiplicación es', racional1.mult(racional2)); 
console.log('El resultado de la división es', racional1.div(racional2));
console.log(racional1.toString());
console.log(racional1.toFixed(6));

console.log()
console.log()
*/
