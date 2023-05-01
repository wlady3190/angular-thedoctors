import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsIconComponent } from './whats-icon.component';

describe('WhatsIconComponent', () => {
  let component: WhatsIconComponent;
  let fixture: ComponentFixture<WhatsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
