import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Superhero } from './superhero';

declare var require: any;
var superheroesJson: Superhero[] = require('../assets/superheroes.json');

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  private _seperheroes: BehaviorSubject<Superhero[]> = new BehaviorSubject<
    Superhero[]
  >([]);
  public readonly superheroes$ = this._seperheroes.asObservable();

  constructor() {
    this._seperheroes.next(superheroesJson);
  }

  public get(): Superhero[] {
    return this._seperheroes.value;
  }

  public add(superhero: Superhero): void {
    const current = this._seperheroes.value;
    this._seperheroes.next([...current, superhero]);
    console.log(this._seperheroes);
  }

  public remove(superhero: Superhero): void {
    const current = this._seperheroes.value;
    const update = current.filter((hero) => hero !== superhero);
    this._seperheroes.next(update);
  }
}
