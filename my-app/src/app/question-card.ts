/**
 * This class represents a question. This is basically some text with blanks or
 * just requiring an answer.
 */

import { Card } from "app/card";

export class QuestionCard extends Card {

    // Thenumber of blanks in the question
    private blankNumber: number;

    constructor(text: string, blankNumber: number) {
        super(text);
        this.blankNumber = blankNumber;
    }
}
