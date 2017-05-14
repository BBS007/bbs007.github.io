/**
 * This service helps providing cards.
 */

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';


import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { QuestionCard } from './question-card'
import { AnswerCard } from './answer-card'

@Injectable()
export class CardsService {

    // Urls for different languages
    url_en: string = '../assets/cards_en.json';
    url_fr: string = '../assets/cards_en.json';

    // Observables
    dataQuestion: Observable<QuestionCard[]>;
    dataAnswer: Observable<AnswerCard[]>;

    constructor(private http: Http) { }

    // Choose the url according to the current lang
    private chooseUrl(): string {
        return this.url_fr;
    }

    public getQuestionCards(): Observable<QuestionCard[]> {
        var url = this.chooseUrl();

        if (!this.dataQuestion) {
            this.dataQuestion = this.http.get(url)
                .map(res => { 
                    return res.json().blackCards.map(elt => {
                        return new QuestionCard(elt.text, elt.pick);
                    });
                });
        }

        return this.dataQuestion;
    }


    public getAnswserCards(): Observable<AnswerCard[]> {
        var url = this.chooseUrl();
        
        if (!this.dataAnswer) {
            this.dataAnswer = this.http.get(url)
                .map(res => {
                    return res.json().whiteCards.map(elt => {
                        return new AnswerCard(elt);
                })
            })
        }

        return this.dataAnswer
    }

}
