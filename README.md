# Frontend Home Assignment

This project is an Angular application implementing a file system search interface. The application consists of a single-page user interface with a text input for searching and a Tree View component to display the file system structure.

## Client
# FileSystemApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Components Used

- **Angular 16:** This project is developed using Angular 16, following industry best practices for structure and design.

- **PrimeNG Tree Component:** The application utilizes the [PrimeNG Tree component](https://primefaces.org/primeng/showcase/#/tree) to efficiently display the hierarchical file system structure. This component provides an intuitive and user-friendly interface for navigating and interacting with the data.

- **PrimeNG Icons:** This application utilizes the icons provided by [PrimeNG](https://www.primefaces.org/primeng/). PrimeNG offers a wide range of icons that are designed to work seamlessly with their components, enhancing the visual appeal and user experience.

- **Bootstrap 3:** [Bootstrap 3](https://getbootstrap.com/docs/3.4/) is incorporated to improve the overall styling and layout of the application. Bootstrap offers a comprehensive set of responsive design components and utilities that ensure optimal presentation on various devices.


## Setup Instructions for client

1. Make sure you have Node.js and npm installed on your machine.

2. Navigate to the `file-system-app-client` directory.

3. Install project dependencies by running:

   ```bash
   npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Server

The server-side of this application provides an API endpoint to retrieve file system data. It supports two main endpoints:

- `GET '/files'`: Returns the entire JSON data representing directories, subdirectories, and files.

- `GET '/files?q=tx'`: Returns items with a prefix of 'tx' in the file system structure.

### Setup Instructions for Server

1. Ensure you have Visual Studio and .NET SDK installed on your machine.

2. Open the solution file (`YourSolution.sln`) in Visual Studio.

3. Set the startup project to the desired backend project (e.g., `FilesServer`).

4. Press `Ctrl + F5` or click the "Start" button to run the backend.





