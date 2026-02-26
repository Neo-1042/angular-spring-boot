# Angular

[www.angular.io](www.angular.io)

Angular is a framework for building modern **single-page
applications**.

## Single-Page vs Traditional Application

### Traditional Applications

Every single user action results in a full HTML page load.

### Single-Page Applications

- A single-page web application is composed, naturally, of
a single page that is updated based on user actions.

- Single-page applications usually perform a 
**partial update**, instead of a full page reload.

- The single-page app can communicate with the server using
a REST API for data exchange.

### Examples of Single-Page web apps:

1. Google Maps
2. Gmail (most email web applications)

## Angular Solutions

- Australian Government: Immigration
- Microsoft Xbox
- Citi Bank Customer Service

[www.madewithangular.com](www.madewithangular.com)

## Angular History

October 2010 --> AngularJS 1.0   
October 2016 --> **Angular 2**. Full rewrite of AngularJS.

Angular 4, 5, 6, 7, 8 are incremental improvements of Angular 2.

Major release every 6 months.

2022 -> Angular 15
2023 -> Angular 16
...
2026 -> Angular 21

Could I not just do everything myself with **JavaScript, jQuery,
AJAX**, etc.?  
It may work for small basic hobby apps, but for common features
such as **data binding**, you may reinvent the wheel.  
Plus, it would be hard to manage and mantain for **enterprise
real-time applications**.

This is actually the main reason why we have frameworks such
as **Angular, React.js, Vue.js, ...**

# Development Environment Setup

- Most Angular developers use TypeScript (Superset of JS)

|  Tool   |   Purpose  |
| :---    | :---       |
| `node`  | Running JavaScript code from the command-line.  |
| `npm`   | Node Package Manager -> Download new node packages and features. Similar to `maven`.  |
| `tsc`   | TypeScript compiler.   |
| `nvm`   | Node Version Manager -> Allows to have multiple versions of Node installed  |

[www.luv2code.com/angular-install-guides](www.luv2code.com/angular-install-guides)

## Software to be Installed

- Visual Studio Code
- nvm 0.35.0 =>
- npm 7.24.0
- node 16.10.0
- tsc 4.6.4
- Angular 14
- Spring Boot 2.7.1