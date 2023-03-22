import { Pokemon } from "./Pokemon";

/**
 * Se define la clase `Water` que implementa la interfaz `Pokemon`.
 */
export class Water implements Pokemon {
  
    /**
    * @param name Nombre del pokemon.
    * @param type Tipo del pokemon.
    * @param id Número de la Pokédex.
    * @param weak_vs Tipo de pokemon contra el que es débil.
    * @returns Devuelve un objeto de tipo `Water`.
     */
    constructor(protected name: string, protected type: string = 'agua',
      protected id: number, protected weak_vs: string = 'planta') {
    }

    /**
     * 
     * @returns Devuelve el nombre del pokemon.
     */
    getName() {
      return this.name;
    }

    /**
     * 
     * @returns Devuelve el tipo del pokemon.
     */
    getType() {
      return this.type;
    }

    /**
     * 
     * @returns Devuelve el número de la Pokédex.
     */
    getId() {
      return this.id;
    }

    /**
     * 
     * @returns Devuelve el tipo de pokemon contra el que es débil.
     */
    getWeaknesses() {
      return this.weak_vs;
    }
  
    /**
     * El método `setName()` permite cambiar el nombre del pokemon.
     * @param name Nombre del pokemon.
     */
    setName(name: string) {
      this.name = name;
    }

    /**
     * El método `setId()` permite cambiar el número de la Pokédex.
     * @param id Número de la Pokédex.
     */
    setId(id: number) {
      this.id = id;
    }

    /**
     * El método `setType()` permite cambiar el tipo del pokemon.
     * @param type Tipo del pokemon.
     */
    setType(type: string) {
      this.type = type;
    }
  
    /**
     * El método `setWeaknesses()` permite cambiar el tipo de pokemon contra el que es débil.
     * @param weak_vs Tipo de pokemon contra el que es débil.
     */
    setWeaknesses(weak_vs: string) {
      this.weak_vs = weak_vs;
    }
  }