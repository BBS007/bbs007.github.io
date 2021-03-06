/**
 * This structure is the base for every card in the game.
 */

export abstract class Card {

    // The text to display on the card
    protected text : string;

    constructor(text: string) {
        this.text = text;
    }

    public getText(): string {
        return this.text;
    }

}
