import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseEngineComponent } from './analyse-engine.component';

describe('AnalyseEngineComponent', () => {
  let component: AnalyseEngineComponent;
  let fixture: ComponentFixture<AnalyseEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
