import 'mocha';
import {expect} from 'chai';
import { FireCreator } from "../../src/PE103-P08/FuegoCreator";

describe ('--Pruebas Pokémon tipo Planta-- ', () => { 
    const CharmanderCreator = new FireCreator("Charmander", "fuego", 3, "agua");
    const Charmander = CharmanderCreator.factoryMethod();
    
    it('Comprobar la instancia del logic para ver si el texto es correcto.', () => {
         expect(CharmanderCreator.logic()).to.be.equal("Soy Charmander, en la Pokédex soy el número 3, de tipo fuego y soy débil contra agua");
    });

    it('Comprobar que el nombre del Pokémon es Charmander.', () => {
        expect(Charmander.getName()).to.be.equal("Charmander");
    });

    it('Comprobar que el tipo del Pokémon es fuego.', () => {
        expect(Charmander.getType()).to.be.equal("fuego");
    });

    it('Comprobar que el número de la Pokédex del Pokémon es 3.', () => {
        expect(Charmander.getId()).to.be.equal(3);
    });

    it('Comprobar que el tipo de debilidad del Pokémon es agua.', () => {
        expect(Charmander.getWeaknesses()).to.be.equal("agua");
    });

    it('Modificar el nombre del Pokémon a Charmeleon.', () => {
        Charmander.setName("Charmeleon");
        expect(Charmander.getName()).to.be.equal("Charmeleon");
    });

    it('Modificar el tipo del Pokémon a fuego volador.', () => {
        Charmander.setType("fuego volador");
        expect(Charmander.getType()).to.be.equal("fuego volador");
    });

    it('Modificar el número de la Pokédex del Pokémon a 4.', () => {
        Charmander.setId(4);
        expect(Charmander.getId()).to.be.equal(4);
    });

    it('Modificar el tipo de debilidad del Pokémon a tierra.', () => {
        Charmander.setWeaknesses("tierra");
        expect(Charmander.getWeaknesses()).to.be.equal("tierra");
    });
});