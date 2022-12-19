import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordContainerComponent } from './dash-bord-container.component';

describe('DashBordContainerComponent', () => {
  let component: DashBordContainerComponent;
  let fixture: ComponentFixture<DashBordContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBordContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
