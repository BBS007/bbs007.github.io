import { Component } from '@angular/core';

import { CardsAgainstHumanityComponent } from './cards-against-humanity/cards-against-humanity.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    entryComponents: [CardsAgainstHumanityComponent]
})
    
export class AppComponent {
    title = 'Tour of heroes';
    hero: Hero = {
        id: 1,
        name: 'Jean Grey'
    };
    heroes: Hero[] = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
    {id: 1, name: 'Jean Grey'},
    {id: 2, name: 'Cyclops'},
    {id: 3, name: 'Wolverine'},
    {id: 4, name: 'Storm'},
    {id: 5, name: 'Kitty Pride'},
    {id: 6, name: 'Emma Frost'},
    {id: 7, name: 'Rogue'},
    {id: 8, name: 'Gambit'},
    {id: 9, name: 'Magneto'},
    {id: 10, name: 'Professor Xavier'},
]

export class Hero {
    id: number;
    name: string;
}