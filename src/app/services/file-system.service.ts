import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FileSystemService {
  
 private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getFileSystemData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  searchFileSystem(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}search?q=${query}`);
  }
  
  convertToPrimeNGStructure(node: any): TreeNode {
    const primeNGNode: TreeNode = { label: node.name, children: [] };
  
    if (node.files) {
      primeNGNode.children = node.files.map((file: any) => ({ label: file }));
    }
  
    if (node.directories) {
      node.directories.forEach((subDirectories: Node[]) => {
        subDirectories.forEach((subNode: Node) => {
          const childNode = this.convertToPrimeNGStructure(subNode);
          primeNGNode.children?.push(childNode);
        });
      });
    }
  
    return primeNGNode;
  }
  
  convertSearchToPrimeNGStructure(node: any): TreeNode {
    return node.map((item: string) => ({ label: item }));
  }
}
