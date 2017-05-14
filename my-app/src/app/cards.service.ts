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

    url: string = '../assets/cards.json';

    dataQuestion: Observable<QuestionCard[]>;
    dataAnswer: Observable<AnswerCard[]>;

    constructor(private http: Http) { }


    public getQuestionCards(): Observable<QuestionCard[]> {
        console.log('Getting questions');
        if (!this.dataQuestion) {
            this.dataQuestion = this.http.get(this.url)
                .map(res => {
                    console.log(res.json());
                    return res.json().blackCards.map(elt => {
                        return new QuestionCard(elt.text, elt.pick);
                    });
                });
            console.log(this.dataQuestion);
        }

        return this.dataQuestion;
    }


    public getAnswserCards(): Observable<AnswerCard[]> {

        if (!this.dataAnswer) {
            this.dataAnswer = this.http.get(this.url)
                .map(res => {
                    return res.json().whiteCards.map(elt => {
                    console.log(elt);
                        return new AnswerCard(elt);
                })
            })
        }

        return this.dataAnswer
    }

}
