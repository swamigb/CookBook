import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTemComponent } from './recipe-tem.component';

describe('RecipeTemComponent', () => {
  let component: RecipeTemComponent;
  let fixture: ComponentFixture<RecipeTemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
