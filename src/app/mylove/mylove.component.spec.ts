import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyloveComponent } from './mylove.component';

describe('MyloveComponent', () => {
  let component: MyloveComponent;
  let fixture: ComponentFixture<MyloveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyloveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
