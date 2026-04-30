export type PokemonTypeDto = {
    type: {
        name: 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy';
    };
}

export type PokemonSpritesDto = {
    front_shiny: string;
}

export type PokemonDto = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonTypeDto[];
    order: number;
    sprites: PokemonSpritesDto;
}