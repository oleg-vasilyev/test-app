import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFeatureComponent } from './some-feature.component';

describe('SomeFeatureComponent', () => {
  let component: SomeFeatureComponent;
  let fixture: ComponentFixture<SomeFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
