import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglePaperPage } from './single-paper.page';

describe('SinglePaperPage', () => {
  let component: SinglePaperPage;
  let fixture: ComponentFixture<SinglePaperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePaperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
