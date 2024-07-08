import { Injectable } from '@angular/core';
import { HEROES } from './mock.hero';
import { Hero } from 'src/model';

import { Observable, catchError, map, tap, of } from 'rxjs'
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesURL = 'api/heroes'

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }

  handleError<T>(op='operation', result?: T) {
    return (error: any) => {
     // send err to err logging
      console.error(error);

      // better job of transforming err for user consumption
      this.log(`${op} failed: ${error.message}`);

      // fall back to keep the app running
      return of(result as T);
    }

  }

  getHeroes(): Observable<Hero[]> {
    this.log("fetch list");
    return this.http.get<Hero[]>(this.heroesURL).pipe(
      tap(() => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  // 404 if id not found
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesURL}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(() => this.log('fetched hero id=${id}')),
      catchError(this.handleError<Hero>(`get hero id=${id}`))
    );
  }

  // update hero

  // delete hero

  log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
