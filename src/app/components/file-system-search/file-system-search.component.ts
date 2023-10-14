import { Component, Output , EventEmitter, OnInit} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-file-system-search',
  templateUrl: './file-system-search.component.html',
  styleUrls: ['./file-system-search.component.css']
})
export class FileSystemSearchComponent implements OnInit {

  searchTerm$ = new Subject<string>();
  searchSubscription!: Subscription;
  searchTerm: string = '';
  @Output() searchClicked = new EventEmitter<string>();
  ngOnInit() {
    this.searchSubscription = this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.search();
      });
  }

  // Function to emit a search event to the parent component
  search(): void {
    this.searchClicked.emit(this.searchTerm);
  }
  
    // Function to clear the search term
  clearSearch() {
    this.searchTerm = ''; 
    this.searchTerm$.next(''); 
  }

    // Called when the component is destroyed
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
