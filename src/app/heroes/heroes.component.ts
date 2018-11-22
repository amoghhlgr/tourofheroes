import { Component, OnInit } from '@angular/core';

import { Hero, Villain } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  villains: Villain[];

  selectedHero: Hero;
  selectedVillain: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getVillains();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe( HEROES => this.heroes = HEROES);
  }

  getVillains(): void {
    this.heroService.getVillains()
    .subscribe(VILLAINS => this.villains = VILLAINS);
  }

}
