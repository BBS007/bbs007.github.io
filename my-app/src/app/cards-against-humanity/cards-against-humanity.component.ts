import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CardsService } from '../cards.service';

import { QuestionCard } from "app/question-card";
import { AnswerCard } from "app/answer-card";

import { QuestionCardComponent } from '../question-card/question-card.component';

@Component({
    selector: 'app-cards-against-humanity',
    templateUrl: './cards-against-humanity.component.html',
    styleUrls: ['./cards-against-humanity.component.css'],
    providers: [CardsService],
    entryComponents: [
        QuestionCardComponent
    ]
})


export class CardsAgainstHumanityComponent implements OnInit {

    private questions: QuestionCard[];
    private answers: AnswerCard[];

    constructor(
        private cardsService: CardsService,
        private route: ActivatedRoute,
        private location: Location
    ) { 
        
        this.cardsService.getQuestionCards().subscribe(res => {
            this.questions = res;
        });
        this.cardsService.getAnswserCards().subscribe(res => {
            this.answers = res;
        });
        
    }


    ngOnInit(): void {
        
    }

}
