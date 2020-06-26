import { Component } from '@angular/core';
import { ContactForm } from './ContactMe';

@Component({
    selector: 'app-contactme',
    templateUrl: './ContactMe.component.html',
    styleUrls: ['./ContactMe.component.scss']
})
export class ContactMeComponent {
    ContactDetail = new ContactForm();

    toSubmit() {
        console.log(this.ContactDetail);
    }
}

