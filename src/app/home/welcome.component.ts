import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls:['../shared/welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    today= Date.now();
}
