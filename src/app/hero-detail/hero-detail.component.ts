import { Component, OnInit, Input } from '@angular/core';
import { HeroInterface } from '../hero_interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero?: HeroInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
