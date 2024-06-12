import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { ListPokemonsComponent } from "./components/list-pokemons/list-pokemons.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PokemonComponent, ListPokemonsComponent]
})
export class AppComponent {
  title = 'pokedex';
}
