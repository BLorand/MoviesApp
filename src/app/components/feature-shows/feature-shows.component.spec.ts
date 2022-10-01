import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureShowsComponent } from './feature-shows.component';

describe('FeatureShowsComponent', () => {
  let component: FeatureShowsComponent;
  let fixture: ComponentFixture<FeatureShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
