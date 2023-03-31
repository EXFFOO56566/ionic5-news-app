import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationExplorePage } from './location-explore.page';

describe('LocationExplorePage', () => {
  let component: LocationExplorePage;
  let fixture: ComponentFixture<LocationExplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationExplorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationExplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
