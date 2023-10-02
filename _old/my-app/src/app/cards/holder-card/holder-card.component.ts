import { Component, Input } from '@angular/core';


import { AnswerCard } from '../answer-card/answer-card'
import { AnswerCardComponent } from '../answer-card/answer-card.component'

@Component({
  selector: 'app-holder-card',
  templateUrl: './holder-card.component.html',
  styleUrls: [
    '../card.css',
    './holder-card.component.css'
  ],
  entryComponents: [
    AnswerCardComponent
  ]
})

export class HolderCardComponent {

  @Input() answer: AnswerCard;

  constructor() { }

}
