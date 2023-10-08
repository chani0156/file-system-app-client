import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemSearchComponent } from './file-system-search.component';

describe('FileSystemSearchComponent', () => {
  let component: FileSystemSearchComponent;
  let fixture: ComponentFixture<FileSystemSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileSystemSearchComponent]
    });
    fixture = TestBed.createComponent(FileSystemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
