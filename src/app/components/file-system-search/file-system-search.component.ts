import { Component, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-file-system-search',
  templateUrl: './file-system-search.component.html',
  styleUrls: ['./file-system-search.component.css']
})
export class FileSystemSearchComponent {
  searchTerm: string = '';

  @Output() searchClicked = new EventEmitter<string>();

  search(): void {
    this.searchClicked.emit(this.searchTerm);
  }
}
