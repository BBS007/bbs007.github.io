import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CardsService } from '../cards.service';

@Component({
    selector: 'app-cards-against-humanity',
    templateUrl: './cards-against-humanity.component.html',
    styleUrls: ['./cards-against-humanity.component.css'],
    providers: [CardsService]

})


export class CardsAgainstHumanityComponent {

    constructor(
        private cardsService: CardsService,
        private route: ActivatedRoute,
        private location: Location
    ) { 
        console.log('Created');
        this.cardsService.getQuestionCards().subscribe(res => {
            console.log(res);
        })
        console.log('Service called');
        
    }



}
