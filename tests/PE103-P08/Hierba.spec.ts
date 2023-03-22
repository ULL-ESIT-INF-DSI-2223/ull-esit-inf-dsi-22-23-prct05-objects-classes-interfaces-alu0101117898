import 'mocha';
import {expect} from 'chai';
import { GrassCreator } from "../../src/PE103-P08/HierbaCreator";

describe ('--Pruebas Pokémon tipo Planta-- ', () => { 
    const BulbasurCreator = new GrassCreator("Bulbasur", "planta", 1, "fuego");
    const Bulbasur = BulbasurCreator.factoryMethod();
    it('Comprobar la instancia del logic para ver si el texto es correcto.', () => {
         expect(BulbasurCreator.logic()).to.be.equal("Soy Bulbasur, en la Pokédex soy el número 1, de tipo planta y soy débil contra fuego");
    });

    it('Comprobar que el nombre del Pokémon es Bulbasur.', () => {
        expect(Bulbasur.getName()).to.be.equal("Bulbasur");
    });

    it('Comprobar que el tipo del Pokémon es planta.', () => {
        expect(Bulbasur.getType()).to.be.equal("planta");
    });

    it('Comprobar que el número de la Pokédex del Pokémon es 1.', () => {
        expect(Bulbasur.getId()).to.be.equal(1);
    });

    it('Comprobar que el tipo de debilidad del Pokémon es fuego.', () => {
        expect(Bulbasur.getWeaknesses()).to.be.equal("fuego");
    });

    it('Modificar el nombre del Pokémon a Ivysaur.', () => {
        Bulbasur.setName("Ivysaur");
        expect(Bulbasur.getName()).to.be.equal("Ivysaur");
    });

    it('Modificar el tipo del Pokémon a veneno.', () => {
        Bulbasur.setType("veneno");
        expect(Bulbasur.getType()).to.be.equal("veneno");
    });

    it('Modificar el número de la Pokédex del Pokémon a 2.', () => {
        Bulbasur.setId(2);
        expect(Bulbasur.getId()).to.be.equal(2);
    });

    it('Modificar el tipo de debilidad del Pokémon a agua.', () => {
        Bulbasur.setWeaknesses("agua");
        expect(Bulbasur.getWeaknesses()).to.be.equal("agua");
    });
});
