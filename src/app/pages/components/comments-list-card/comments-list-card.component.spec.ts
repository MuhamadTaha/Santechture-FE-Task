import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsListCardComponent } from './comments-list-card.component';

describe('CommentsListCardComponent', () => {
  let component: CommentsListCardComponent;
  let fixture: ComponentFixture<CommentsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
