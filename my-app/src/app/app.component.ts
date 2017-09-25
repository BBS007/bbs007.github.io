import { Component } from '@angular/core';
import {  } from "@angular/router";

import { CardsAgainstHumanityComponent } from 'app/cards-against-humanity/cards-against-humanity.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    entryComponents: [CardsAgainstHumanityComponent]
})
    
export class AppComponent {
    
}

