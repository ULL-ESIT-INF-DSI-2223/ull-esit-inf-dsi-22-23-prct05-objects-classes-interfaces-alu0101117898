import 'mocha';
import {expect} from 'chai';
import { WaterCreator } from "../../src/PE103-P08/AguaCreator";

describe ('--Pruebas Pokémon tipo Planta-- ', () => { 
    const SquirtleCreator = new WaterCreator("Squirtle", "agua", 2, "planta");
    const Squirtle = SquirtleCreator.factoryMethod();

    it('Comprobar la instancia del logic para ver si el texto es correcto.', () => {
         expect(SquirtleCreator.logic()).to.be.equal("Soy Squirtle, en la Pokédex soy el número 2, de tipo agua y soy débil contra planta");
    });

    it('Comprobar que el nombre del Pokémon es Squirtle.', () => {
        expect(Squirtle.getName()).to.be.equal("Squirtle");
    });

    it('Comprobar que el tipo del Pokémon es agua.', () => {
        expect(Squirtle.getType()).to.be.equal("agua");
    });

    it('Comprobar que el número de la Pokédex del Pokémon es 2.', () => {
        expect(Squirtle.getId()).to.be.equal(2);
    });

    it('Comprobar que el tipo de debilidad del Pokémon es planta.', () => {
        expect(Squirtle.getWeaknesses()).to.be.equal("planta");
    });

    it('Modificar el nombre del Pokémon a Wartortle.', () => {
        Squirtle.setName("Wartortle");
        expect(Squirtle.getName()).to.be.equal("Wartortle");
    });

    it('Modificar el tipo del Pokémon a veneno.', () => {
        Squirtle.setType("veneno");
        expect(Squirtle.getType()).to.be.equal("veneno");
    });

    it('Modificar el número de la Pokédex del Pokémon a 3.', () => {
        Squirtle.setId(3);
        expect(Squirtle.getId()).to.be.equal(3);
    });

    it('Modificar el tipo de debilidad del Pokémon a fuego.', () => {
        Squirtle.setWeaknesses("fuego");
        expect(Squirtle.getWeaknesses()).to.be.equal("fuego");
    });
});