import { Injectable } from '@angular/core';
import { Hero, Villain } from './hero';
import { HEROES, VILLAINS } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

  getVillains(): Observable<Villain[]> {
    this.messageService.add('HeroService: fetched villains')
    return of (VILLAINS);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id === id));
  }

  getVillain(id: number): Observable<Villain> {
    this.messageService.add(`HeroService: fetched villain id=${id}`);
    return of (VILLAINS.find(villain => villain.id === id));
  }

  constructor(private messageService: MessageService) { 
  }
}
