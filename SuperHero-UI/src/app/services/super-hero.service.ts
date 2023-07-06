import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
// import { environment } from 'src/environments/environment';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private apiUrl = 'https://localhost:7034/api'
  private url = "SuperHero";

//  private apiUrl = environment.apiUrl

  constructor(private http :HttpClient  ) { }

  // simple code demi data to ui
//  public getSuperHeroes() : SuperHero[] {
//   let hero = new SuperHero();
//   hero.id = 1;
//   hero.name ="Spider Man";
//   hero.firstName = "Peter";
//   hero.lastName ="parker";
//   hero.place = "new youk city"
//   return [hero]
//  }

public getSuperHeroes() : Observable<SuperHero[]> {
  return this.http.get<SuperHero[]>(`${this.apiUrl}/${this.url}`);
 }
public updateHero(hero:SuperHero) : Observable<SuperHero[]> {
  return this.http.put<SuperHero[]>(`${this.apiUrl}/${this.url}`,
  hero);
 }
public createHero(hero:SuperHero) : Observable<SuperHero[]> {
  return this.http.post<SuperHero[]>(`${this.apiUrl}/${this.url}`,
  hero);
 }


 public deleteHero(hero:SuperHero) : Observable<SuperHero[]> {
  return this.http.delete<SuperHero[]>(`${this.apiUrl}/${this.url}/${hero.id}`);
 }

}


