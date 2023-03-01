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

    private mcd(a: number, b: number): number {
      if (b == 0) {
          return a;
      }
      return this.mcd(b, a % b);
    }

    public simplificar(): void {
      const mcd = this.mcd(Math.abs(this.numerador), this.denominador);
      this.numerador /= mcd;
      this.denominador /= mcd;
      if (this.denominador < 0) {
        this.numerador = -this.numerador;
        this.denominador = -this.denominador;
      }
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
      const auxNumerador = this.numerador * this2.numerador;
      const auxDenominador = this.denominador * this2.denominador;
      return new Racionales(auxNumerador, auxDenominador);
    }
  
    public div(this2: Racionales): Racionales {
      return this.mult(this2.inversa());
    }

    public toString(): string {
      return `${this.numerador}/${this.denominador}`;
    }

    public toFixed(decimales: number): number {
      const recursiva = this.numerador / this.denominador;
      return parseFloat(recursiva.toFixed(decimales));
    }
} 

const racional1 = new Racionales(2, 3);
const racional2 = new Racionales(4, 5);
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
try {
  const racional3 = new Racionales(3, 0);
} catch (error) {
  console.log(error.message); 
}
try {
  const racional4 = new Racionales(3, 3.5);
} catch (error) {
  console.log(error.message); 
}
