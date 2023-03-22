import { Pokemon } from './Pokemon';

/**
 * Se desarrollla la clase abstracta `PokemonFactory`
 * que define el método abstracto factoryMethod(), 
 * que se utilizará para crear objetos de tipo Pokemon, dependiendo
 * de su tipo.
 */
export abstract class PokemonFactory {
    public abstract factoryMethod(): Pokemon;

    public logic(): string {
      const pokemon = this.factoryMethod();
      return `Soy ${pokemon.getName()}, ` +
             `en la Pokédex soy el número ${pokemon.getId()}, ` +
             `de tipo ${pokemon.getType()} y ` +
             `soy débil contra ${pokemon.getWeaknesses()}`;
    }
}