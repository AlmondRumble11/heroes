import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCharactersComponent } from './hero-characters.component';

describe('HeroCharactersComponent', () => {
  let component: HeroCharactersComponent;
  let fixture: ComponentFixture<HeroCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
