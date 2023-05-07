import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListCardComponent } from './posts-list-card.component';

describe('PostsListCardComponent', () => {
  let component: PostsListCardComponent;
  let fixture: ComponentFixture<PostsListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
