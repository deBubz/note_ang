import { Injectable } from '@angular/core';
import { Hero } from 'src/interface/hero.interface';
import { MessageService } from './message.service'
import { Observable, of } from 'rxjs'

const HEROES: Hero[] = [
  { id: 1, name: "Windstorm" },
  { id: 2, name: "HomeLander" },
  { id: 3, name: "The Deep" },
  { id: 4, name: "The Noir" },
  { id: 5, name: "Huey" },
]

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');   

    return heroes;
  }
}
