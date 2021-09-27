import { Component, OnInit } from '@angular/core';
//importing hero_interface
import { HeroInterface } from '../hero_interface';

import { SUPERHEROES } from '../placeholder-heroes';

import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';

//@ for importing
@Component({
  selector: 'app-hero-characters',
  templateUrl: './hero-characters.component.html',
  styleUrls: ['./hero-characters.component.css']
})

//export so it can be used elsewhere
export class HeroCharactersComponent implements OnInit {
  
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
  /*selectedHero ?: HeroInterface;
  onSelect(hero: HeroInterface): void {
    
    //get hero
    this.selectedHero = hero;
    
    //add message to this hero
    this.messageService.add(`HeroesComponent: Selected Superhero of tomorrows  id is ${hero.id} and name is ${hero.name}`);
  }*/

  //get heroes from the service
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  //add a new hero
  add(name: string): void {
    name = name.trim();

    //checks if anme given
    if (!name) {
       return; 
    }
    this.heroService.addHero({ name } as HeroInterface)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }


  //delete a hero
  delete(hero: HeroInterface): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
