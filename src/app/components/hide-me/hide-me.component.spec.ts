import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideMeComponent } from './hide-me.component';

describe('HideMeComponent', () => {
  let component: HideMeComponent;
  let fixture: ComponentFixture<HideMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
