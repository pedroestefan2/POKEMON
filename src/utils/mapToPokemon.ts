import { Pokemon, TipoPokemon } from "../types/pokemon";
import { PokemonDto, PokemonTypeDto } from "../types/pokeApi/pokemonDto";

export function mapToPokemons(pokemonDtos: PokemonDto[]): Pokemon[] {
    return pokemonDtos.map(mapToPokemon);
}

/*
export function mapToPokemon(pokemonDto: PokemonDto): Pokemon {
    return {
        id: pokemonDto.id,
        nombre: pokemonDto.name,
        peso: pokemonDto.weight,
        altura: pokemonDto.height,
        tipos: pokemonDto.types.map(mapToTipoPokemon),
        indice: pokemonDto.order,
        icon: pokemonDto.sprites.front_shiny,
    };
}
*/


export function mapToPokemon(pokemonDto: PokemonDto): Pokemon {
    const sprites = pokemonDto.sprites as any;

    const animatedGif = sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default;
    const pokemonImage = animatedGif || sprites.front_default;

    return {
        id: pokemonDto.id,
        nombre: pokemonDto.name,
        peso: pokemonDto.weight,
        altura: pokemonDto.height,
        tipos: pokemonDto.types.map(mapToTipoPokemon),
        indice: pokemonDto.order,
        icon: pokemonImage, 
    };
}

function mapToTipoPokemon(tipoPokemonDto: PokemonTypeDto): TipoPokemon {
    switch (tipoPokemonDto.type.name) {
        case 'normal': return 'normal';
        case 'fighting': return 'lucha';
        case 'flying': return 'volador';
        case 'poison': return 'veneno';
        case 'ground': return 'tierra';
        case 'rock': return 'roca';
        case 'bug': return 'bicho';
        case 'ghost': return 'fantasma';
        case 'steel': return 'acero';
        case 'fire': return 'fuego';
        case 'water': return 'agua';
        case 'grass': return 'planta';
        case 'electric': return 'eléctrico';
        case 'psychic': return 'psíquico';
        case 'ice': return 'hielo';
        case 'dragon': return 'dragón';
        case 'dark': return 'siniestro';
        case 'fairy': return 'hada';
        default:
            throw new Error(`Tipo de pokemon desconocido: ${tipoPokemonDto.type.name}`);
    }
}


/// Este archivo limpia los datos que vienen de la API.
/// Cambia los nombres a español y prepara el peso y la altura para el desplegable.
