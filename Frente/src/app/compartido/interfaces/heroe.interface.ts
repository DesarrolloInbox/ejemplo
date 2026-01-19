export interface Heroe {
    id: number;
    nombre: string;
    poderes: Poderes;
    imagen: string;
    alineacion: 'bueno' | 'malo' | 'neutral';
};

export interface Poderes {
    velocidad: number;
    inteligencia: number;
};

export type Poder = keyof Poderes;