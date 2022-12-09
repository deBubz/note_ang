import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero? : Hero;
  
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.getHeroesFromService();
  }

  getHeroesFromService(): void {
    this.heroService.getHeroes()
      .subscribe(h => this.heroes = h);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: selected hero id=${hero.id}`)
  }

}
