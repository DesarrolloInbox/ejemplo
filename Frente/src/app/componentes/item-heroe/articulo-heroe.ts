import { Component, computed, input, output } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';
import { HeroeCambioPoderes } from '../../compartido/interfaces/heroe-cambio-poderes.interface';
import { KeyValuePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-articulo-heroe',
  imports: [KeyValuePipe, TitleCasePipe],
  templateUrl: './articulo-heroe.html',
  styleUrl: './articulo-heroe.css',
})
export class ArticuloHeroe {
  
  heroe = input.required<Heroe>()
  cambioPoderes = output<HeroeCambioPoderes>()

  isHeroVillain = computed(() => this.heroe().alineacion === 'malo');

  decrementaPoder(poder: Poder): void {
    this.cambioPoderes.emit({ heroe: this.heroe(), poder, valor: -1})
  }

  incrementaPoder(poder: Poder): void {
    this.cambioPoderes.emit({ heroe: this.heroe(), poder, valor: 1})
  }
}
