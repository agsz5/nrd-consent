# nrd-consent -  Consent Application

A simple single page application that requires a consent before accessing the rest of the application (next page).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Running the application

1. Clone or download the repository
2. Run "npm install"
3. Run "ng serve"
4. Navigate to `http://localhost:4200/`

## Notes

- The application uses a `ConsentGuard` to prevent direct unauthorized navigation to `http://localhost:4200/next`
- `SessionStorage` keeps record of the state of the consent checkbox, in case of page reload
- The application was tested for Usability with the 'WAVE' and "Axe" tools. All pertinent landmarks and necessary aria information was provided
