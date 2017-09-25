import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { CardsService } from 'app/cards/cards.service';

import { BoardComponent } from "app/board/board.component";

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
    ]
})


export class CardsAgainstHumanityComponent {

    

}
