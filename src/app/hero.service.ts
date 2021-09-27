import { Injectable } from '@angular/core';
import { HeroInterface } from './hero_interface';
import { SUPERHEROES } from './placeholder-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // url to web api
  private heroesUrl = 'api/heroes';  
  //get all heroes
  
  //old
  /*getHeroes(): Observable<HeroInterface[]> {
    const heroes = of(SUPERHEROES);
    this.messageService.add('HeroService: got all superheroes');
    return heroes;
  }*/

  //new, uses httpclient instead of of()
  getHeroes(): Observable<HeroInterface[]> {
    //log message and hadle error
    return this.http.get<HeroInterface[]>(this.heroesUrl).pipe(tap(_ => this.log("got heroes")),catchError(this.handleError<HeroInterface[]>('getHeroes',[])));
  }

  //get a specific hero by id
  getHero(id: number): Observable<HeroInterface> {
   
    //find a hero with given id
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<HeroInterface>(url).pipe(
      tap(_ => this.log(`got hero with id: ${id}`)),
      catchError(this.handleError<HeroInterface>(`getHero with id: ${id}`))
    );
  }
  //constructor
  constructor(private messageService: MessageService, private http: HttpClient) { }

  //for logging
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
//error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      //log error to console
      console.error(error); 
      
      //logs the error message
      this.log(`${operation} failed: ${error.message}`);
  
      //app still works as return is empty
      return of(result as T);
    };
  }

  //http header for updating
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  //update a hero
  updateHero(hero: HeroInterface): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  //add a new hero
  addHero(hero: HeroInterface): Observable<HeroInterface> {
    return this.http.post<HeroInterface>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: HeroInterface) => this.log(`added a new hero ${newHero.name} with id of ${newHero.id}`)),
      catchError(this.handleError<HeroInterface>('addHero'))
    );
  }

  //delete a hero
  deleteHero(id: number): Observable<HeroInterface> {
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<HeroInterface>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero with id of ${id}`)),
      catchError(this.handleError<HeroInterface>('deleteHero'))
    );
  }

  //search heroes
  searchHeroes(term: string): Observable<HeroInterface[]> {
    
    //if nonen given
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<HeroInterface[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<HeroInterface[]>('searchHeroes', []))
    );
  }
}
