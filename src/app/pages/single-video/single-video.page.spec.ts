import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleVideoPage } from './single-video.page';

describe('SingleVideoPage', () => {
  let component: SingleVideoPage;
  let fixture: ComponentFixture<SingleVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
