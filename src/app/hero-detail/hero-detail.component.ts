import { Component, OnInit, Input } from '@angular/core';
import { Hero, Villain} from '../hero';

import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  @Input() villain: Villain;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
    this.getVillain();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(HERO => this.hero = HERO)
  }

  getVillain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getVillain(id)
    .subscribe(VILLAIN => this.villain = VILLAIN)
  }

  goBack(): void {
    this.location.back();
  }

}
