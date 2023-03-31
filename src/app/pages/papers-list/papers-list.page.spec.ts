import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PapersListPage } from './papers-list.page';

describe('PapersListPage', () => {
  let component: PapersListPage;
  let fixture: ComponentFixture<PapersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PapersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
