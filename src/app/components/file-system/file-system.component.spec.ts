import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemComponent } from './file-system.component';

describe('FileSystemComponent', () => {
  let component: FileSystemComponent;
  let fixture: ComponentFixture<FileSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileSystemComponent]
    });
    fixture = TestBed.createComponent(FileSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
