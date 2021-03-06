import { Component, Input, OnInit } from '@angular/core';

import { QuestionCard } from './question-card';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: [
    '../card.css',
    './question-card.component.css'
  ]
})
export class QuestionCardComponent implements OnInit {

  @Input() card: QuestionCard;

  constructor() { }

  ngOnInit() {
  }

}
