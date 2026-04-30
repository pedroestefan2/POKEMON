export type TipoPokemon = 'normal' | 'fuego' | 'agua' | 'planta' | 'eléctrico' | 'hielo' | 'lucha' | 'veneno' | 'tierra' | 'volador' | 'psíquico' | 'bicho' | 'roca' | 'fantasma' | 'dragón' | 'siniestro' | 'acero' | 'hada';

export type Pokemon = {
    id: number;
    nombre: string;
    peso: number;
    altura: number;
    tipos: TipoPokemon[];
    indice: number;
    icon: string;
};
