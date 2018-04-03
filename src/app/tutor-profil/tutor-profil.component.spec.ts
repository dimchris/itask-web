import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorProfilComponent } from './tutor-profil.component';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';                 
import {CarouselModule} from 'primeng/carousel';



describe('TutorProfilComponent', () => {
  let component: TutorProfilComponent;
  let fixture: ComponentFixture<TutorProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
