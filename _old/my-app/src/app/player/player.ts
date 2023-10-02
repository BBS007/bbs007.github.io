export class Player {

    private _name: string;
    get name(): string {
        return this.name;
    }

    private score: number;

    constructor(name?: string) {
        this._name = (undefined == name) ? "John" : name;

        this.score = 0;
    }

    public resetScore() {
        this.score = 0;
    }

}