import 'mocha';
import {expect} from 'chai';
import {BibliotecaMusical, IArtista, ICancion, IDisco} from "../src/ejercicio-1";

const biblioteca = new BibliotecaMusical();

const artista1: IArtista = {
  nombreArtista: "Queen",
  oyentesMensuales: 10005800,
  discografia: [
    {
      nombreDisco: "A Night at the Opera",
      anioPublicacion: 1975,
      canciones: [
        {
          nombreCancion: "Bohemian Rhapsody",
          duracion: 354,
          generos: ["Rock", "Pop"],
          single: true,
          reproducciones: 10000000,
        },
        {
          nombreCancion: "You're My Best Friend",
          duracion: 155,
          generos: ["Rock", "Pop"],
          single: false,
          reproducciones: 5000000,
        },
      ],
    },
  ],
};

const artista2: IArtista = {
  nombreArtista: "The Beatles",
  oyentesMensuales: 2000000,
  discografia: [
    {
      nombreDisco: "Abbey Road",
      anioPublicacion: 1969,
      canciones: [
        {
          nombreCancion: "Come Together",
          duracion: 259,
          generos: ["Rock"],
          single: true,
          reproducciones: 850000,
        },
        {
          nombreCancion: "Something",
          duracion: 181,
          generos: ["Rock", "Pop"],
          single: true,
          reproducciones: 700000,
        },
      ],
    },
  ],
};

biblioteca.agregarArtista(artista1);
biblioteca.agregarArtista(artista2);
biblioteca.mostrarInformacion();

describe ('--Ejercicio 1 Pruebas--', () => {
  it("Se ha encontrado el disco que contiene la palabra 'Opera'", () => {
    expect(biblioteca.buscarDiscos("Opera")).to.be.not.equal(null);
  });
  it("Se ha encontrado la canción que contiene la palabra 'Bohemian'", () => {
    expect(biblioteca.buscarCanciones("Bohemian")).to.be.not.equal(null);
  });
  it("biblioteca.calcularDuracionDisco(artista2.discografia[0]) returns 440", () => {
    expect(biblioteca.calcularDuracionDisco(artista2.discografia[0])).to.be.equal(440);
  });
  it("biblioteca.calcularDuracionDisco(artista2.discografia[0]) returns 509", () => {
    expect(biblioteca.calcularDuracionDisco(artista1.discografia[0])).to.be.equal(509);
  });
  it("biblioteca.calcularReproduccionesDisco(artista2.discografia[0]) returns 1550000", () => {
    expect(biblioteca.calcularReproduccionesDisco(artista2.discografia[0])).to.be.equal(1550000);
  });
  it("biblioteca.calcularReproduccionesDisco(artista1.discografia[0]) returns 15000000", () => {
    expect(biblioteca.calcularReproduccionesDisco(artista1.discografia[0])).to.be.equal(15000000);
  });
  it("biblioteca.calcularNumCanciones(artista2.discografia[0]) returns 2", () => {
    expect(biblioteca.calcularNumCanciones(artista2.discografia[0])).to.be.equal(2);
  });
  it("biblioteca.calcularNumCanciones(artista1.discografia[0])) returns 2", () => {
    expect(biblioteca.calcularNumCanciones(artista1.discografia[0])).to.be.equal(2);
  });
}); 