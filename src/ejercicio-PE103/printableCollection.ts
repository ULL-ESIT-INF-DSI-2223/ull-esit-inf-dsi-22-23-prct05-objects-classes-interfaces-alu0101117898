import { Collectable } from  "./collectable";
import { Printable} from  "./printable";

/**
 * Se implementa la clase genérica abstracta `PrintableCollection` donde se declaran los siguientes
 * métodos:
 * @method `additem` Añade a objeto `collection[]` el `item` añadido.
 * @method `getItem` Devuelve el `item` añadido en la posicion que se le ha asignado.
 * @method `removeItem` Elimina un item específico del array de items y o devuelve por pantalla.
 * @method `getNumberOfItems` Se realiza un `lenght` sobre el array de items 
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
    constructor (public collection: T[]) {
    }
    addItem(item: T): void {
        this.collection.push(item);
    }

    getItem(item: number):T | undefined{
        if (item < 0 || item > this.collection.length) {
            console.log('Error, debe introducir un valor correcto.');
            return undefined;
        }
        return this.collection[item];
    }

    getNumberOfItems(): number {
        return this.collection.length;
    }

    removeItem(item: number): number | undefined{
        if (item < 0|| item > this.collection.length) {
            console.log('Error, debe introducir un valor correcto.');
            return undefined;
        }
        const aux = Number(this.collection[item]);
        this.collection.splice(item, 1);
        return aux;
    }
    abstract print () : void;
}

class NumericPrintableCollection extends PrintableCollection<number> {
    constructor(private coleccion: number[] = []) {
        super(coleccion); 
    }
    print(): void {
      console.log(this.coleccion.join(", "));
    }
  }
  

/*export class StringPrintableCollection extends PrintableCollection<string> {
    print(): string {
        return this.collection.join(", ");
    }
}
*/

const myNumCollection = new NumericPrintableCollection();
myNumCollection.addItem(1);
myNumCollection.addItem(2);
myNumCollection.addItem(3);
myNumCollection.print(); 
