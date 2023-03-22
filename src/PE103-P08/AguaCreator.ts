import { PokemonFactory } from "./PokemonFactory";
import { Pokemon} from "./Pokemon";
import { Water } from "./Agua";

/**
 * Se desarrolla la clase `WaterCreator` que extiende de la clase abstracta
 * `PokemonFactory` y que implementa el método `factoryMethod()`.
 * Este método devuelve un objeto de tipo `Water`, ya que, a través de `factoryMethod()`,
 * se crea un objeto de tipo `Water`.
 */
export class WaterCreator extends PokemonFactory {
    constructor(private readonly name: string, private type: string = 'agua',
      private id: number, private weak_vs: string = `planta`) {
      super();
    }
    public factoryMethod(): Pokemon {
      return new Water(this.name, this.type, this.id, this.weak_vs);
    }
  }