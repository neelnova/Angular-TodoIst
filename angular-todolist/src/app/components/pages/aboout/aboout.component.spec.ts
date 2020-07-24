import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbooutComponent } from './aboout.component';

describe('AbooutComponent', () => {
  let component: AbooutComponent;
  let fixture: ComponentFixture<AbooutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbooutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbooutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
