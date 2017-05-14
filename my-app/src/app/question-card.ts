/**
 * This class represents a question. This is basically some text with blanks or
 * just requiring an answer.
 */

import { Card } from "app/card";

export class QuestionCard extends Card {

    // Thenumber of blanks in the question
    private pick: number;

    constructor(text: string, pick: number) {
        super(text);
        this.pick = pick;
    }
}
