/**
 * This service helps providing cards.
 */

import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';


import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { QuestionCard } from './question-card/question-card'
import { AnswerCard } from './answer-card/answer-card'

@Injectable()
export class CardsService {

    // Urls for different languages
    url_en: string = '../assets/cards_en.json';
    url_fr: string = '../assets/cards_fr.json';

    // Current lang
    currentLang: string;

    // Observables
    dataQuestion: Observable<QuestionCard[]>;
    dataAnswer: Observable<AnswerCard[]>;

    constructor(private http: Http) { }

    // Choose the url according to the current lang
    private chooseUrl(lang: string = "fr"): string {
        var ret;

        switch (lang) {
            case "fr":
                ret = this.url_fr;
                break;
            case "en":
                ret = this.url_en
                break;
            default:
                ret = this.url_fr;
        }

        return ret;
    }

    public setCurrentLang(lang: string): void {
        this.currentLang = lang;
    }

    private isLangChanged(lang: string): boolean {
        return this.currentLang != lang;
    }

    public getQuestionCards(lang:string): Observable<QuestionCard[]> {
        var url = this.chooseUrl(lang);

        if (!this.dataQuestion || this.isLangChanged(lang)) {

            this.dataQuestion = this.http.get(url)
                .map(res => { 
                    return res.json().blackCards.map(elt => {
                        return new QuestionCard(elt.text, elt.pick);
                    });
                });
        }

        return this.dataQuestion;
    }


    public getAnswserCards(lang:string): Observable<AnswerCard[]> {
        var url = this.chooseUrl(lang);
        
        if (!this.dataAnswer || this.isLangChanged(lang)) {

            this.dataAnswer = this.http.get(url)
                .map(res => {
                    return res.json().whiteCards.map(elt => {
                        return new AnswerCard(elt);
                })
            })
        }

        return this.dataAnswer
    }

    public getAvailableLanguages(): any[] {
        return [
            {
                text:"Français",
                value: "fr"
            }, {
                text: "English",
                value:"en"
            }
        ]
    }

}
