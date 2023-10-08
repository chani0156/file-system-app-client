interface FileSystemNode {
    name: string;
    files?: string[];
    directories?: FileSystemNode[][];
  }

  interface Node {
    name: string;
    files?: string[];
    directories?: Node[] | Node[][];
  }
  
  interface TreeNode {
    label: string;
    children?: TreeNode[];
  }