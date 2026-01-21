import { Component } from '@angular/core';
import { ArticuloHeroe } from "../item-heroe/articulo-heroe";
import { Heroe } from '../../compartido/interfaces/heroe.interface';
import { HeroeCambioPoderes } from '../../compartido/interfaces/heroe-cambio-poderes.interface';

@Component({
  selector: 'app-lista-heroe',
  imports: [ArticuloHeroe],
  templateUrl: './lista-heroe.html',
  styleUrl: './lista-heroe.css',
})
export class ListaHeroe {
  heroes: Heroe[] = [
    {
      id: 620,
      nombre: 'Spider-Man',
      poderes: {
        velocidad: 95,
        inteligencia: 5
      },
      imagen: '',
      alineacion: 'bueno'
    },
    {
      id: 620,
      nombre: 'Batman',
      poderes: {
        velocidad: 85,
        inteligencia: 15
      },
      imagen: '',
      alineacion: 'malo'
    },
    {
      id: 620,
      nombre: 'Super-Man',
      poderes: {
        velocidad: 75,
        inteligencia: 25
      },
      imagen: '',
      alineacion: 'bueno'
    }
  ]

  guardarPoderes({ heroe, poder, valor }: HeroeCambioPoderes) {
    heroe.poderes[poder]+= valor;
  }
}
