import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformIntro } from './platform-intro';

describe('PlatformIntro', () => {
  let component: PlatformIntro;
  let fixture: ComponentFixture<PlatformIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatformIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
