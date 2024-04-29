import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishSelectionComponent } from './fish-selection.component';

describe('FishSelectionComponent', () => {
  let component: FishSelectionComponent;
  let fixture: ComponentFixture<FishSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FishSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FishSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
