# Create a New Angular Component

Goal: Create a new Angular custom component to display a table
of data.

# Development Process

## 1. Create a new project.
```bash
ng new sales-project
cd sales-project
# From Angular 17, you need:
# ng new --no-standalone sales-project
```

## 2. Update main template page.  
File = src/app/app.html  

Remove all of the Angular "placeholder" content.

## 3. Generate a new component.
```bash
# CREATEs components and UPDATEs the src/app/app.module.ts
ng generate component sales-person-list
```

### About the Generated Files

`*.component.ts` --> The component class.  
`*.component.html` --> The component template HTML.  
`*.component.css` --> The component private CSS.  
`*.component.spec.ts` --> The **unit test** specifications.  

`UPDATE src/app/app.module.ts` --> This is where it adds the
component to the main application module.

## 4. Add new component selector to app template page.

1) File = src/app/app.component.html
```html
<h1>Sales Team</h1>

<app-sales-person-list></app-sales-person-list>
```

2) File = src/app/sales-person-list/sales-person-list.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-sales-person-list',
    templateUrl : './sales-person-list.component.html',
    styleUrls : ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

    constructor() {}

    ngOnInit() { }
}
```

3) File = src/app/sales-person-list/sales-person-list.component.html
```html
<!-- Later on, we'll add the HTML table here -->
<p>sales-person-list works!</p>
```

## 5. Generate a SalesPerson class.

```bash
ng generate class sales-person-list/SalesPerson
# src/app/sales-person-list/sales-person.ts
# Add our own constructor() with
# firstName, lastName, email and salesVolume (number)
```

## 6. In SalesPersonListComponent, create sample data.

File = src/app/sales-person-list/sales-person-list.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
    selector: 'app-sales-person-list',
    templateUrl: './sales-person-list.component.html',
    styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

    // Create an array of objects
    salesPersonList: SalesPerson[] = [
        new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 50000),
        new SalesPerson("John", "Doe", "john.doe@luv2code.com", 40000),
        new SalesPerson("Claire", "Murphy", "claire.murphy@luv2code.com", 90000),
        new SalesPerson("Mai", "Troung", "mai.troung@luv2code.com", 60000),
    ]
}
```

## 7. In sales-person-list template file, build HTML table by looping over data.

File = src/app/sales-person-list/sales-person-list.component.html
```html
<table border="1">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Sales Volume</th>
        </tr>
    </thead>

    <!-- Especial Angular Directive: *ngFor -->
    <tbody>
        <tr *ngFor="let tmpSalesPerson of salesPersonList">
            <td>{{ tmpSalesPerson.firstName }}</td>
            <td>{{ tmpSalesPerson.lastName }}</td>
            <td>{{ tmpSalesPerson.email }}</td>
            <td>{{ tmpSalesPerson.salesVolume }}</td>
        </tr>
    </tbody>
</table>
```

# [!!!] In the Angular world, developers use "public" for properties very often.

In the Angular world, most developers skip on the getter(), 
setter() methods. Even the official documentation says so.