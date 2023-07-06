import { Component } from '@angular/core';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
 heroes: SuperHero[] = [] ;
 heroToEdit?: SuperHero;

 constructor (private sHeroService : SuperHeroService){}

 ngOnInit(): void {

//   this.heroes = this.sHeroService.getSuperHeroes();
// console.log(this.heroes);

 this.sHeroService
  .getSuperHeroes()
  .subscribe((result : SuperHero[]) => ( this.heroes = result))

 }


 initNewHero(){
  this.heroToEdit = new SuperHero();
 }

 updateHeroList(heroes: SuperHero[]) {
  this.heroes = heroes;
}

// deleteHero(hero: SuperHero) {
//   this.sHeroService
//     .deleteHero(hero)
//     // .subscribe((heroes: SuperHero[]) => heroes.emit(heroes));
// }


 editHero(hero:SuperHero){
this.heroToEdit = hero
 }

}
