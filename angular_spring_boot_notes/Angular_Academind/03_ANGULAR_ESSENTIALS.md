# Angular Essentials

1. Understanding the Angular Project Structure.
2. Working with Components.
3. Handling User Events.
4. Rendering & Updating Dynamic UI Content

- `tsconfig.json` -> Configuration for the
TypeScript compiler (transpiler).
- `package.json` -> Project dependencies 
(similar to a pom.xml file)

- `src/main.ts` -> The first TypeScript code that gets
executed when you load the page.

## Running "01-starting-project"

After you download the "01-starting-project" code, run:
```bash
cd /Users/rafael1642/GIT/Projects/angular-spring-boot/angular_training/01_Modern_Angular/01-starting-project
npm install # Install dependencies, only once

ng serve --open # Automatically opens localhost:4200
```

Now, when you load the first page, you have the following
HTML page (rendered by the browser):

```html
<!doctype html>
<html lang="en">
<head>
    <script type="module" src="/@vite/client"></script>

    <meta charset="utf-8">
    <title>Essentials</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <app-root></app-root>
    <script src="polyfills.js" type="module"></script>
    <script src="main.js" type="module"></script>
</body>
</html>
```

Components are custom HTML elements. For example,  
File = src/app/app.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
```