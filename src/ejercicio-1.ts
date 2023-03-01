/*interface Artista {
  nombre: string;
  oyentesMensuales: number;
  discografia: Disco;
}

interface Disco {
  nombre: string;
  datePublicacion: number;
  canciones: Cancion[];
}

interface Cancion {
  nombre: string;
  duracion: number;
  genero: string [];
  single: boolean;
  reproducciones: number;
}

class BibliotecaMusical{
  private artistas: Artista[];

  constructor() {
    this.artistas = [];
  }

  public addArtista(artista:Artista): void {
    this.artistas.push(artista);
  }

  public findArtista(nombre: string): Artista[] {
    return this.artistas.filter((a) => a.nombre.toLowerCase().includes(nombre.toLowerCase()));
  } 

  public findDisco(nombre: string): Disco[] {
    const discoEncontrado: Disco[] = [];
    this.artistas.forEach((artista))
    return discoEncontrado; 
  }
}*/