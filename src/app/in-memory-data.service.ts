//this replaces the placeholder heroes 

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HeroInterface } from './hero_interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Spiderman' },
      { id: 2, name: 'Superman' },
      { id: 3, name: 'Batman' },
      { id: 4, name: 'Invincible' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Magneto' },
      { id: 8, name: 'Phoenix' },
      { id: 9, name: 'Raven' },
      { id: 10, name: 'Wonder Woman' },
      { id: 11, name: 'Thor' }
    ];
    return {heroes};
  }

  //if empty return sthe first id otherwise the highest
  genId(heroes: HeroInterface[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}