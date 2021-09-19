import { Injectable } from '@angular/core';
import { HeroInterface } from './hero_interface';
import { SUPERHEROES } from './placeholder-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): HeroInterface[] {
    return SUPERHEROES;
  }
  constructor() { }
}
