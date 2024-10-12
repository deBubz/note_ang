import { filter, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero.interface';
import { HEROES } from './mockHeroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root'})
export class HeroService {
  constructor(
    public msgService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.msgService.add(`HeroService: fetched services`)
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.msgService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
