# Angular: Conditionals and Formatting

Goal: add a new column to check if a sales person has met
their quota.

## *ngIf

- Angular provides a **structural directive**: `ngIf`
- We can show content based on a condition or 
a boolean expression.
```html
<div *ngIf="some boolean expression">
    Show this content if the boolean expression is true
</div>
```

## *ngIf + *ngElse Example

```html
<table>
    <!--...-->
    <tbody>
        <tr *ngFor="let tmpSalesPerson of salesPerson">
        <!--...-->
        <td>{{ tmpSalesPerson.salesVolume }}</td>
        <td>
            <div *ngIf="tmpSalesPerson.salesVolume >= 60000; else myElseBlock">YES</div>
            <ng-template #myElseBlock>NO</ng-template>
        </td>
        </tr>
    </tbody>
</table>
```

Other Angular structural directives:  
`ngFor, ngSwitch, ngStyle`

Goal 2: Format the Sales Volume as currency, US Dollars.

## Angular Currency Pipes (only for formatting)

Angular provides currency formatting using **Angular Pipes**

You send data to a pipe for formatting:
```html
<p>Cost: {{ someValue | currency: 'USD' }}</p>
```

Angular offers more types of pipes for formatting, such as:  
`DatePipe, DecimalPipe`.
