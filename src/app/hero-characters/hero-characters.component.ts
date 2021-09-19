import { Component, OnInit } from '@angular/core';
//importing hero_interface
import { HeroInterface } from '../hero_interface';

import { SUPERHEROES } from '../placeholder-heroes';

import { HeroService } from '../hero.service';


//@ for importing
@Component({
  selector: 'app-hero-characters',
  templateUrl: './hero-characters.component.html',
  styleUrls: ['./hero-characters.component.css']
})

//export so it can be used elsewhere
export class HeroCharactersComponent implements OnInit {
  //get palceholder heroes
  heroes: HeroInterface[] = [];
  
  /*hero : HeroInterface = {
    id: 1,
    name : "Batman"
  };*/

  //constructor for heroservice. defines a private heroService property and identifies it as injection site.
  //Reserve the constructor for minimal initialization such as wiring constructor parameters to properties.
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  //renaming HeroInterface to selectedHero
  //it is not assigned as no hero is selected when the app starts
  selectedHero ?: HeroInterface;
  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }

  //get heroes from the service
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
