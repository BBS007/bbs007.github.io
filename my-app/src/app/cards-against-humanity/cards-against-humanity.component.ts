import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

// Classes
import { Player } from "./player";

// Components
import { BoardComponent } from "app/board/board.component";

// Services
import { CardsService } from "app/cards/cards.service";

@Component({
    selector: 'app-cards-against-humanity',
    templateUrl: './cards-against-humanity.component.html',
    styleUrls: [
        './cards-against-humanity.component.css',
        '../cards/question-card/question-card.component.css',
        '../flags/flags.min.css'
    ],
    entryComponents: [
        BoardComponent
    ],
    providers: [
        CardsService
    ]
})


export class CardsAgainstHumanityComponent {


    private username: string;
    private languages: any[];

    private language: string;

    constructor(private cardsService: CardsService) {
        this.username = "";

        // TODO: create a Lang class to format it properly
        this.languages = this.cardsService.getAvailableLanguages();
        this.language = this.languages[0].value;
    }


    private onSubmit() {
        if ("" != this.username) {
            console.log("Submited\n" + this.username + "\n" + this.language);
      }
    
  }
  
  private langChanged(value: string) {
      console.log("langChanged " + value);
      this.language = value;
  }

}
