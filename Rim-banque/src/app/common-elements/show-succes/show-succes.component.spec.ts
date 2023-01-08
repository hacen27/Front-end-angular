import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuccesComponent } from './show-succes.component';

describe('ShowSuccesComponent', () => {
  let component: ShowSuccesComponent;
  let fixture: ComponentFixture<ShowSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
