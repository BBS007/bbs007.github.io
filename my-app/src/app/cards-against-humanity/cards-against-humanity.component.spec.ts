import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAgainstHumanityComponent } from './cards-against-humanity.component';

describe('CardsAgainstHumanityComponent', () => {
  let component: CardsAgainstHumanityComponent;
  let fixture: ComponentFixture<CardsAgainstHumanityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsAgainstHumanityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAgainstHumanityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
