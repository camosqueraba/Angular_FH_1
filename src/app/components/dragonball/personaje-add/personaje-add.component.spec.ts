import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeAddComponent } from './personaje-add.component';

describe('PersonajeAddComponent', () => {
  let component: PersonajeAddComponent;
  let fixture: ComponentFixture<PersonajeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
