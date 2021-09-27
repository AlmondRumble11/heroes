import { Component, OnInit, Input } from '@angular/core';
import { HeroInterface } from '../hero_interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero?: HeroInterface;

  constructor(
    //holds information about the route to this instance of the HeroDetailComponent
    private route: ActivatedRoute,

    //gets hero data from the remote server and this component will use it to get the hero-to-display
    private heroService: HeroService,

    //service for interacting with the browser
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  //get a hero
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(heroes => this.hero = heroes);
  }
  //go to previous page
  goBack(): void {
    this.location.back();
  }
  //save new hero name
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
  
}
