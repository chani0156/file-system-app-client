import { Component, OnInit } from '@angular/core';
import { FileSystemService } from 'src/app/services/file-system.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.css']
})
export class FileSystemComponent implements OnInit{
  files: any = [];
  data: TreeNode[]= [];
    cols: any[]= [];
  constructor(private fileSystemService: FileSystemService) { }

  ngOnInit(): void {
   this.getFiles()
  }
  getFiles(): void{
    this.fileSystemService.getFileSystemData().subscribe(data => {
      if (data && data.length > 0) {
     this.files=data;
      }
    });
  }
  updateFiles(searchTerm: string): void {
    if(searchTerm!=""){
    this.files=[];
    this.fileSystemService.searchFileSystem(searchTerm).subscribe(data => {
      if (data && data.length > 0) {
        this.files=data;
      }
    });
  }
  else this.getFiles();
}
}
