import { PokemonFactory } from "./PokemonFactory";
import { Pokemon} from "./Pokemon";
import { Fire } from "./Fuego";

/**
 * Se desarrolla la clase `WaterCreator` que extiende de la clase abstracta
 * `PokemonFactory` y que implementa el método `factoryMethod()`.
 * Este método devuelve un objeto de tipo `Water`, ya que, a través de `factoryMethod()`,
 * se crea un objeto de tipo `Water`.
 */
export class FireCreator extends PokemonFactory {
    constructor(private readonly name: string, private type: string = 'fuego',
      private id: number, private weak_vs: string = `agua`) {
      super();
    }
    public factoryMethod(): Pokemon {
      return new Fire(this.name, this.type, this.id, this.weak_vs);
    }
  }