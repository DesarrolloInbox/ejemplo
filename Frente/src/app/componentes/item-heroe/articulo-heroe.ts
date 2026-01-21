import { Component, computed, input } from '@angular/core';
import { Heroe, Poder } from '../../compartido/interfaces/heroe.interface';

@Component({
  selector: 'app-articulo-heroe',
  imports: [],
  templateUrl: './articulo-heroe.html',
  styleUrl: './articulo-heroe.css',
})
export class ArticuloHeroe {
  
  heroe = input.required<Heroe>()

  isHeroVillain = computed(() => this.heroe().alineacion === 'malo');

  decrementaPoder(poder: Poder): void {
    if (this.heroe().poderes[poder] > 0) {
      this.heroe().poderes[poder]--;
    }
  }

  incrementaPoder(poder: Poder): void {
    if (this.heroe().poderes[poder] < 100) {
      this.heroe().poderes[poder]++;
    }
  }
}
