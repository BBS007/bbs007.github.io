import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { CardsService } from '../cards.service';

// Classes
import { QuestionCard } from "app/question-card";
import { AnswerCard } from "app/answer-card";

// Components
import { QuestionCardComponent } from '../question-card/question-card.component';
import { AnswerCardComponent } from '../answer-card/answer-card.component';

@Component({
    selector: 'app-cards-against-humanity',
    templateUrl: './cards-against-humanity.component.html',
    styleUrls: [
        './cards-against-humanity.component.css',
        '../question-card/question-card.component.css'
    ],
    providers: [
        CardsService
    ],
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

    private promiseDone: Promise<Boolean>;

    constructor(
        private cardsService: CardsService,
        private route: ActivatedRoute,
        private location: Location
    ) { 
        this.currentQuestion = null;
        this.currentAnswers = null;

        // Init the cards and deal when the promises are resolved
        this.initCardsLists()
            .then(
            (res) => {
                this.newDeal();
            }
        );

    }

    /**
     * Will fetch the lists in a promise.
     * @return a promise that is resolved when lists are reset.
     */
    private initCardsLists(): Promise<Boolean[]> {

        // Questions promise, resolved when the result is set
        const promiseQuestions = new Promise<Boolean>((resolve) => {

            this.cardsService.getQuestionCards().subscribe(res => {
                this.questions = res;
                console.log("Questions set");
                resolve(true);
            });

        });
        
        // Answers promise, resolved when the result is set
        const promiseAnswers = new Promise<Boolean>((resolve) => {

            this.cardsService.getAnswserCards().subscribe(res => {
                this.answers = res;
                console.log("Answers set");
                resolve(true);
            });

        });
        
        // This promise is resolved after both are resolved
        return Promise.all([
            promiseQuestions,
            promiseAnswers
        ]);
        
    }

    private randomQuestion(): QuestionCard {
        var ret = new QuestionCard("No more questions", 0);

        if (0 != this.questions.length) {
            
            // Random number to pick in tab
            let randNumber = Math.random() * this.questions.length;

            // Get the random question and delete it from the list
            ret = this.questions.splice(randNumber, 1)[0];
        }

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

        return ret;
    }

    public newDeal(): void {
        console.log("New deal");
        this.currentQuestion = this.randomQuestion();
        this.currentAnswers = this.randomAnswers();
        
        console.log("Remaining questions " + this.questions.length);
        console.log("Remaining answers " + this.answers.length);
    }

    public newGame(): void {
        console.log("New game");
        this.initCardsLists()
            .then((res) => {
                console.log("Promise res : " + res);
                this.newDeal();
        });
            
        
    }


    ngOnInit(): void {
        
    }

}
