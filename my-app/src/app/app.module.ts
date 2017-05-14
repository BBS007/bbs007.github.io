import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'


// Components
import { AppComponent } from './app.component';
import { CardsAgainstHumanityComponent } from './cards-against-humanity/cards-against-humanity.component';

// Services
import { CardsService } from './cards.service';
import { QuestionCardComponent } from './question-card/question-card.component';

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
        QuestionCardComponent
    ],
    providers: [
        CardsService
    ],
    bootstrap: [AppComponent]
})
    
export class AppModule { }
