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
    this.fileSystemService.getFileSystemData().subscribe(data => {
      if (data && data.length > 0) {
      this.files = [this.fileSystemService.convertToPrimeNGStructure(data[0])];
      debugger
      }
    });
  }
  updateFiles(searchTerm: string): void {
    this.fileSystemService.searchFileSystem(searchTerm).subscribe(data => {
      if (data && data.length > 0) {
      this.files = this.fileSystemService.convertSearchToPrimeNGStructure(data);
      debugger
      }
    });
  }
}
