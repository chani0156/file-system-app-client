import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from 'primeng/tree';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FileSystemComponent } from './components/file-system/file-system.component';
import { FileSystemSearchComponent } from './components/file-system-search/file-system-search.component';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptor/ErrorInterceptor';
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
