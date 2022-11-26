import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface'

const HEROES: Hero[] = [
  { id: 1, name: "Windstorm" },
  { id: 2, name: "HomeLander" },
  { id: 3, name: "The Deep" },
  { id: 4, name: "The Noir" },
  { id: 5, name: "Huey" },
]
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero? : Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log("aa");
  }

}
