/**
 * This class represents a question. This is basically some text with blanks or
 * just requiring an answer.
 */

import { Card } from "../card";
import { AnswerCard } from "../answer-card/answer-card"

export class QuestionCard extends Card {

    private static BLANK_CHAR: string = '_';

    // Thenumber of blanks in the question    
    private pick: number;

    constructor(text: string, pick: number) {
        super(text);
        this.pick = pick;
    }

    public getPick(): number {
        return this.pick;
    }

    /**
     * Return whether we answer a wuestion or fill blanks.
     */
    private isSimple(): boolean {
        return -1 == this.text.indexOf(QuestionCard.BLANK_CHAR);
    }

    /**
     * Generate a preview of the answer in the question.
     * @param answers The list containg the answers for each blanks or null
     * if there is no answer for a blank
     */
    public getPreview(answers: AnswerCard[]): string {

        var ret: string = "";

        if (!this.isSimple()) {


            var splitted = this.text.split(QuestionCard.BLANK_CHAR);
            ret += splitted[0];

            for (var i = 0; i < this.pick; ++i) {

                if (null != answers[i]) {
                    ret += answers[i].getText().replace(".", "");
                } else {
                    ret += QuestionCard.BLANK_CHAR;
                }

                ret += splitted[i + 1];

            }

        } else {
            ret = this.text;
            if (null != answers[0]) {
                ret += "\n" + answers[0].getText();
            }
        }

        return ret;
    }
}
