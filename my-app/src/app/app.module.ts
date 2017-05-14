import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

// Services
import { CardsService } from './cards.service';

// Components
import { AppComponent } from './app.component';
import { CardsAgainstHumanityComponent } from './cards-against-humanity/cards-against-humanity.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { AnswerCardComponent } from './answer-card/answer-card.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'cah',
                component: CardsAgainstHumanityComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        CardsAgainstHumanityComponent,
        QuestionCardComponent,
        AnswerCardComponent
    ],
    providers: [
        CardsService
    ],
    bootstrap: [AppComponent]
})
    
export class AppModule { }
