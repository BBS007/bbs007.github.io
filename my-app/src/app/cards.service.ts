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

    url_en: string = '../assets/cards.json';

    dataQuestion: Observable<QuestionCard[]>;
    dataAnswer: Observable<AnswerCard[]>;

    constructor(private http: Http) { }


    public getQuestionCards(): Observable<QuestionCard[]> {
        
        if (!this.dataQuestion) {
            this.dataQuestion = this.http.get(this.url_en)
                .map(res => { 
                    return res.json().blackCards.map(elt => {
                        return new QuestionCard(elt.text, elt.pick);
                    });
                });
        }

        return this.dataQuestion;
    }


    public getAnswserCards(): Observable<AnswerCard[]> {

        if (!this.dataAnswer) {
            this.dataAnswer = this.http.get(this.url_en)
                .map(res => {
                    return res.json().whiteCards.map(elt => {
                        return new AnswerCard(elt);
                })
            })
        }

        return this.dataAnswer
    }

}
