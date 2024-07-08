import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero-service.service';
import { Hero } from 'src/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe(h => this.heroes = h.slice(0,5));
  }
}
