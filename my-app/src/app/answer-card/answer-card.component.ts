import { Component, Input, OnInit } from '@angular/core';

import { AnswerCard } from '../answer-card';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: [
    './answer-card.component.css',
    '../question-card/question-card.component.css'
  ]
})
  
export class AnswerCardComponent implements OnInit {

  @Input() card: AnswerCard;

  constructor() { }

  ngOnInit() {
  }

}
