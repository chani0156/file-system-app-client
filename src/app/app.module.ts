import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from 'primeng/tree';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileSystemComponent } from './components/file-system/file-system.component';
import { FileSystemSearchComponent } from './components/file-system-search/file-system-search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FileSystemComponent,
    FileSystemSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TreeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
