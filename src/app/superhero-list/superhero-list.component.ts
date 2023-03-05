import { Component, OnInit } from '@angular/core';
import { Superhero } from '../superhero';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.scss'],
})
export class SuperheroListComponent implements OnInit {
  public superheroes: Superhero[];

  constructor(private superheroService: SuperheroService) {}

  ngOnInit(): void {
    this.superheroes = this.superheroService.get();
    this.superheroService.superheroes$.subscribe(
      (superheroes) => (this.superheroes = superheroes)
    );
  }

  callSuperman() {
    const superman: Superhero = {
      id: 2,
      name: 'Superman',
      power: 'Heat Vision',
    };

    this.superheroService.add(superman);
  }

  removeHero(superhero: Superhero): void {
    this.superheroService.remove(superhero);
  }
}
