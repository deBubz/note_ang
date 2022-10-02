import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }

}
