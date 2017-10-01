import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent { 
    message: string;

    constructor() {
        this.message = 'Success message';
    }
}