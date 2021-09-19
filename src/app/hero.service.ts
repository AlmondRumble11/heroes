import { Injectable } from '@angular/core';
import { HeroInterface } from './hero_interface';
import { SUPERHEROES } from './placeholder-heroes';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<HeroInterface[]> {
    const superheroes = of(SUPERHEROES);
    return superheroes;
  }
  constructor() { }
}
