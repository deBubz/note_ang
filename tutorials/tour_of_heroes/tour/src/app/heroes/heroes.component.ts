import { Component } from '@angular/core';

import { Hero } from './hero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent {
  heroes?: Hero[];

  constructor(
    public heroService: HeroService,
    public msgService: MessageService
  ) {}

  // while it can be called in constructor, its not best practice
  // reserve constructor for minimal initializations, such as
  // wiring constructor parameters to properties
  ngOnInit() {
    this.getHeroes()
  }
  // the ngOnInit hook runs at an appropriate time after constructing `HeroesComponent`

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      h => this.heroes = h
    );
  }

}
