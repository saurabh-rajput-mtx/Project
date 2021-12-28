import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongurlComponent } from './wrongurl.component';

describe('WrongurlComponent', () => {
  let component: WrongurlComponent;
  let fixture: ComponentFixture<WrongurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongurlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
