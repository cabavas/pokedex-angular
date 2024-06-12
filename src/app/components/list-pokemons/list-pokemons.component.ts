import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pokemons',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-pokemons.component.html',
  styleUrl: './list-pokemons.component.css'
})
export class ListPokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
    });
  }

  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  getTypeColor(type: string): string {
    switch (type) {
      case 'normal': return '#9fa19f';
      case 'fighting': return '#ff7f00';
      case 'flying': return '#81b8ee';
      case 'poison': return '#9140cb';
      case 'ground': return '#915121';
      case 'rock': return '#aea981';
      case 'bug': return '#91a11a';
      case 'ghost': return '#704070';
      case 'steel': return '#60a1b7';
      case 'fire': return '#e62828';
      case 'water': return '#2981ef';
      case 'grass': return '#3fa128';
      case 'electric': return '#fabf00';
      case 'psychic': return '#ee4179';
      case 'ice': return '#3ccef3';
      case 'dragon': return '#5160e1';
      case 'dark': return '#614d4e';
      case 'fairy': return '#ee70ee';
      default: return '#000000'; // Cor padrão, caso não haja correspondência
    }
  }

  getBackgroundColor(type: string): string {
    switch (type) {
      case 'normal': return 'rgba(159, 161, 159, 0.6)';
      case 'fighting': return 'rgba(255, 127, 0, 0.6)';
      case 'flying': return 'rgba(129, 184, 238, 0.6)';
      case 'poison': return 'rgba(145, 64, 203, 0.6)';
      case 'ground': return 'rgba(145, 81, 33, 0.6)';
      case 'rock': return 'rgba(174, 169, 129, 0.6)';
      case 'bug': return 'rgba(145, 161, 26, 0.6)';
      case 'ghost': return 'rgba(112, 64, 112, 0.6)';
      case 'steel': return 'rgba(96, 161, 183, 0.6)';
      case 'fire': return 'rgba(230, 40, 40, 0.6)';
      case 'water': return 'rgba(41, 129, 239, 0.6)';
      case 'grass': return 'rgba(63, 161, 40, 0.6)';
      case 'electric': return 'rgba(250, 191, 0, 0.6)';
      case 'psychic': return 'rgba(238, 65, 121, 0.6)';
      case 'ice': return 'rgba(60, 206, 243, 0.6)';
      case 'dragon': return 'rgba(81, 96, 225, 0.6)';
      case 'dark': return 'rgba(97, 77, 78, 0.6)';
      case 'fairy': return 'rgba(238, 112, 238, 0.6)';
      default: return 'rgba(0, 0, 0, 0.6)'; // Cor padrão, caso não haja correspondência
    }
  }
}
