import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FormsModule } from "@angular/forms";

// Classes
import { Player } from "./player";

// Components
import { BoardComponent } from "app/board/board.component";

// Services
import { CardsService } from "app/cards/cards.service";

@Component({
    selector: 'app-cards-against-humanity',
    templateUrl: './cards-against-humanity.component.html',
    styleUrls: [
        './cards-against-humanity.component.css',
        '../cards/question-card/question-card.component.css',
        '../flags/flags.min.css'
    ],
    entryComponents: [
        BoardComponent
    ],
    providers: [
        CardsService
    ]
})


export class CardsAgainstHumanityComponent {

    private player: Player;
    private languages: string[];

    constructor(private cardsService : CardsService) {
        this.player = new Player("");
        this.languages = this.cardsService.getAvailableLanguages();
    }

}
