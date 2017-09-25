import { Component, Input, OnInit } from '@angular/core';

import { AnswerCard } from './answer-card';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: [
    '../card.css',
    './answer-card.component.css'
  ]
})
  
export class AnswerCardComponent implements OnInit {

  @Input() card: AnswerCard;

  constructor() { }

  ngOnInit() {
  }

}
