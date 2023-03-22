import { PokemonFactory } from "./PokemonFactory";
import { Pokemon} from "./Pokemon";
import { Grass } from "./Hierba";

/**
 * Se desarrolla la clase `GrassCreator` que extiende de la clase abstracta
 * `PokemonFactory` y que implementa el método `factoryMethod()`.
 * Este método devuelve un objeto de tipo `Grass`, ya que, a través de `factoryMethod()`,
 * se crea un objeto de tipo `Grass`.
 */
export class GrassCreator extends PokemonFactory {
    constructor(private readonly name: string, private type: string = 'planta',
      private id: number, private weak_vs: string = `fuego`) {
      super();
    }
    public factoryMethod(): Pokemon {
      return new Grass(this.name, this.type, this.id, this.weak_vs);
    }
  }