import { Component } from '@angular/core';

// selector = Which elements should be controlled/replaced?
// standalone: true (necessary for Angular < 19)
// standalone: false -> For Module-Based Components (legacy)
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
})
export class HeaderComponent {

}