# Adding Bootstrap to our Sales Person List Table

# Development Process

## 1. Get the links for the remote Bootstrap files

[https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## 2. Add links to index.html

```html
<head>
    <!-- Bootstrap CSS from https://getbootstrap.com/docs/5.3/getting-started/introduction/ -->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
```

## 3. Apply Bootstrap CSS styles in component HTML template

File = src/app/app.html
```html
<div class="container">
    <h1 class="mt-3 mb-3">Sales Team</h1>
    <app-sales-person-list></app-sales-person-list>
</div>
```

## 4. Apply Bootstrap CSS styles in component HTML table

File = src/app/sales-person-list/sales-person-list-bootstrap.component.html
```html
<table class="table table-hover">
    <thead class="table-dark">
        ...
    </thead>
</table>
```

## 5. Update TypeScript component file to reference Bootstrap HTML template

File = src/app/sales-person-list/sales-person-list.component.ts

```typescript
import { Component, OnInit } from '@angular/core'; 

@Component({
    selector: 'app-sales-person-list',
    templateUrl: './sales-person-list-bootstrap.component.html',
    styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
    // ...
}
```