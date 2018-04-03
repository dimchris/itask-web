import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewGameComponent } from './preview-game.component';

describe('PreviewGameComponent', () => {
  let component: PreviewGameComponent;
  let fixture: ComponentFixture<PreviewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
