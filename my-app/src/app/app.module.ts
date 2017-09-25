import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

// Services
import { CardsService } from 'app/cards/cards.service';

// Components
import { AppComponent } from 'app/app.component';
import { CardsAgainstHumanityComponent } from 'app/cards-against-humanity/cards-against-humanity.component';
import { QuestionCardComponent } from 'app/cards/question-card/question-card.component';
import { AnswerCardComponent } from 'app/cards/answer-card/answer-card.component';
import { HolderCardComponent } from 'app/cards/holder-card/holder-card.component';
import { BoardComponent } from 'app/board/board.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    // Root
    { path: "", redirectTo: "/cah", pathMatch: "full" },

    // Pages
    { path: "cah", component: CardsAgainstHumanityComponent },
    { path: "board", component: BoardComponent },

    // Not found
    { path: "**", component: NotFoundComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        CardsAgainstHumanityComponent,
        QuestionCardComponent,
        AnswerCardComponent,
        HolderCardComponent,
        BoardComponent,
        NotFoundComponent
    ],
    providers: [
        CardsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
