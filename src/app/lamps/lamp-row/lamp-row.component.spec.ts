import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampRowComponent } from './lamp-row.component';

describe('LampRowComponent', () => {
  let component: LampRowComponent;
  let fixture: ComponentFixture<LampRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LampRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LampRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
