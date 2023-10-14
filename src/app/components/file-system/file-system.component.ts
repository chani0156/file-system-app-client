import { Component, OnInit } from '@angular/core';
import { FileSystemService } from 'src/app/services/file-system.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.css']
})
export class FileSystemComponent implements OnInit{
  files: TreeNode[] = [];
  data: TreeNode[] = [];
  cols: any[] = [];
  constructor(private fileSystemService: FileSystemService) { }

  ngOnInit(): void {
   this.getFiles()
  }

    // Function to retrieve file system data
  getFiles(): void {
    this.fileSystemService.getFileSystemData().subscribe({
      next: (data: TreeNode[]) => {
        if (data && data.length > 0) {
          this.files = data;
        }
      },
      error: (error) => {
        console.error('Error fetching files:', error);
      }
    });
  }

    // Function to update file system data based on search term
  updateFiles(searchTerm: string): void {
    if (searchTerm) {
      this.files = []; // Clear current files while searching
      this.fileSystemService.searchFileSystem(searchTerm).subscribe({
        next: (data: TreeNode[]) => {
          if (data && data.length > 0) {
            this.files = data;
          }
        },
        error: (error) => {
          console.error('Error searching files:', error);
        }
      });
    } else {
      this.getFiles();
    }
  }
}