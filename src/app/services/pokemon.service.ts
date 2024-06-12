import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable, map, mergeMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<any>(`${this.baseUrl}${id}`).pipe(
      map(data => {
        const name = data.name;
        const id = data.id;
        const sprite = data.sprites.other.showdown.front_default;
        const types = data.types.map((type: any) => type.type.name);

        return {name, id, sprite, types} as Pokemon;
      }));
  }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.baseUrl}?offset=0&limit=151`).pipe(
      mergeMap((response: any) => response.results),
      mergeMap((pokemon: any) => this.getPokemonByUrl(pokemon.url)),
      toArray()
    );
  }

  private getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get<any>(url).pipe(
      map(data => {
        const name = data.name;
        const id = data.id;
        const sprite = data.sprites.other.showdown.front_default;
        const types = data.types.map((type: any) => type.type.name);
        return { name, id, sprite, types } as Pokemon;
      })
    );
  }
}
