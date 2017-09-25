import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { CardsService } from 'app/cards/cards.service';

// Classes
import { QuestionCard } from "app/cards/question-card/question-card";
import { AnswerCard } from "app/cards/answer-card/answer-card";

// Components
import { QuestionCardComponent } from 'app/cards/question-card/question-card.component';
import { AnswerCardComponent } from 'app/cards/answer-card/answer-card.component';
import { HolderCardComponent } from 'app/cards/holder-card/holder-card.component'

@Component({
    selector: 'app-cards-against-humanity',
    templateUrl: './cards-against-humanity.component.html',
    styleUrls: [
        './cards-against-humanity.component.css',
        '../cards/question-card/question-card.component.css',
        '../flags/flags.min.css'
    ],
    providers: [
        CardsService
    ],
    entryComponents: [
        QuestionCardComponent,
        AnswerCardComponent,
        HolderCardComponent
    ]
})


export class CardsAgainstHumanityComponent implements OnInit {

    // The complete lists
    private questions: QuestionCard[];
    private answers: AnswerCard[];

    // Current list displayed
    private currentQuestion: QuestionCard;
    private currentAnswers: AnswerCard[];

    private choosenAnswers: AnswerCard[];

    // The lang support
    private lang: string;

    constructor(
        private cardsService: CardsService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        // Init lists to null so nothing is displayed
        this.currentQuestion = null;
        this.currentAnswers = null;
        this.choosenAnswers = [];

        // Default lang is fr
        this.lang = "fr";

        // Start a new game
        this.newGame();

    }

    ngOnInit(): void {

    }

    /**
     * Will fetch the lists in a promise.
     * @return a promise that is resolved when lists are reset.
     */
    private initCardsLists(): Promise<Boolean[]> {

        // Questions promise, resolved when the result is set
        const promiseQuestions = new Promise<Boolean>((resolve) => {

            this.cardsService.getQuestionCards(this.lang).subscribe(res => {
                this.questions = res;
                console.log("Questions set");
                resolve(true);
            });

        });

        // Answers promise, resolved when the result is set
        const promiseAnswers = new Promise<Boolean>((resolve) => {

            this.cardsService.getAnswserCards(this.lang).subscribe(res => {
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
                ret[i] = new AnswerCard("No more answers");
            }
        }

        return ret;
    }

    public newDeal(): void {
        console.log("New deal");
        this.currentQuestion = this.randomQuestion();
        this.currentAnswers = this.randomAnswers();
        this.choosenAnswers = new Array<AnswerCard>(this.currentQuestion.getPick());

        // console.log("Remaining questions " + this.questions.length);
        // console.log("Remaining answers " + this.answers.length);
    }

    public newGame(): void {
        console.log("New game");
        this.initCardsLists()
            .then((res) => {
                this.cardsService.setCurrentLang(this.lang);
                this.newDeal();
            });
    }

    public switchLang(lang: string = "fr"): void {
        console.log("New lang " + lang);
        this.lang = lang;

        this.newGame();
    }

    /**
     * Generate an array of index for the blanks cards.
     */
    private getBlanksAnswersArray(): number[] {
        var arr = [];

        for (var i = 0; i < this.currentQuestion.getPick(); ++i) {
            arr.push(i);
        }

        return arr;
    }

    /**
     * When an answer is selected from the hand. It places them in order or
     * "push" them to the next index
     * @param a The answer clicked
     */
    private onAnswerClick(answer: AnswerCard): void {

        // Trying to add only of the answer is not already here
        if (!this.choosenAnswers.find((el: AnswerCard, idx, arr) => {
            if (null == el) {
                return false;
            } else {
                console.log(el.getText() == answer.getText());
                return el.getText() == answer.getText();
            }
        })) {


            var index: number = 0;

            // Search the greatest index we can push answer
            while (this.choosenAnswers[index] != null) {
                ++index;
            }

            // If we are out of the array, we insert at first
            if (index >= this.choosenAnswers.length) {
                index = 0;
            }

            // Shift all existing cards
            for (var i = 0; i < this.choosenAnswers.length - 1; ++i) {
                this.choosenAnswers[i + 1] = this.choosenAnswers[i];
            }

            // Update the view
            this.choosenAnswers[index] = answer;
        }
    }

    /**
     * When clicking an answer in the preselected
     * @param index The index of the answer card to dismiss
     */
    private onAnswerDismiss(index: number): void {
        this.choosenAnswers[index] = null;
    }

}
