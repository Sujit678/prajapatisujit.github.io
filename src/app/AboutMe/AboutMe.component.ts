import { Component } from '@angular/core';

@Component({
    selector: 'app-aboutme',
    templateUrl: './AboutMe.component.html',
    styleUrls: ['./AboutMe.component.scss']
})
export class AboutemeComponent {

    constructor() {}

    scrollTo(elementId) {
        document.querySelector('#' + elementId).scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
}
