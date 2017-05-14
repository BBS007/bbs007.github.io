import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CardsService } from '../cards.service';

import { QuestionCard } from "app/question-card";
import { AnswerCard } from "app/answer-card";

import { QuestionCardComponent } from '../question-card/question-card.component';
import { AnswerCardComponent } from '../answer-card/answer-card.component';

@Component({
    selector: 'app-cards-against-humanity',
    templateUrl: './cards-against-humanity.component.html',
    styleUrls: ['./cards-against-humanity.component.css'],
    providers: [CardsService],
    entryComponents: [
        QuestionCardComponent,
        AnswerCardComponent
    ]
})


export class CardsAgainstHumanityComponent implements OnInit {

    private questions: QuestionCard[];
    private answers: AnswerCard[];

    private currentQuestion: QuestionCard;
    private currentAnswers: AnswerCard[];

    constructor(
        private cardsService: CardsService,
        private route: ActivatedRoute,
        private location: Location
    ) { 
        
        this.cardsService.getQuestionCards().subscribe(res => {
            this.questions = res;
            this.currentQuestion = this.randomQuestion();
        });

        this.cardsService.getAnswserCards().subscribe(res => {
            this.answers = res;
            this.currentAnswers = this.randomAnswers(5);
        });

        this.currentQuestion = null;
        this.currentAnswers = null;
        
    }

    private randomQuestion(): QuestionCard {
        var ret = new QuestionCard("No more questions", 0);

        if (0 != this.questions.length) {
            
            // Random number to pick in tab
            let randNumber = Math.random() * this.questions.length;

            // Get the random question and delete it from the list
            ret = this.questions.splice(randNumber, 1)[0];
        }

        console.log(ret);
        return ret;
    }

    private randomAnswers(howMany: number = 5): AnswerCard[] {
        var ret: AnswerCard[] = new Array<AnswerCard>(howMany);

        if (howMany < this.answers.length) {
            for (var i = 0; i < howMany; ++i) {

                // Random number to pick in tab
                let randNumber = Math.random() * this.answers.length;

                ret[i] = this.answers.splice(randNumber, 1)[0];
            }

        } else {
            for (var i = 0; i < howMany; ++i) {
                ret.push(new AnswerCard("No more answers"));
            }
        }

        console.log(ret);
        return ret;
    }


    ngOnInit(): void {
        
    }

}
