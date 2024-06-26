import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProjectComponent } from './first-project.component';

describe('FirstProjectComponent', () => {
  let component: FirstProjectComponent;
  let fixture: ComponentFixture<FirstProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
