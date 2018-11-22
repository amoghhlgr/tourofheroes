import { Component, OnInit } from '@angular/core';
import { Hero, Villain } from '../hero';
import { HeroService } from '../hero.service';
import { VILLAINS } from '../mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  villains: Villain[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getVillains();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(HEROES => this.heroes = HEROES)
  }

  getVillains(): void {
    this.heroService.getVillains()
    .subscribe(VILLAINS => this.villains = VILLAINS)
  }

}
