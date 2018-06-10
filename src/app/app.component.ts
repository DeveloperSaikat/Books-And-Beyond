import { Component } from '@angular/core';
import { NarutoServices } from './books/naruto.services';

@Component({
  selector: 'pm-root',
  template:`
   <div id="header">
        <nav class='navbar navbar-default navbar-fixed-top'>
          <div class='container-fluid'>
          <button class="btn btn-success navbar-toggle" 
    data-toggle="collapse" 
    data-target=".navbar-collapse"><span class="glyphicon glyphicon-chevron-down"></span></button>
          <div class='navbar-header'>
              <a class='navbar-brand'>{{title}}</a>
              </div>
              <div class="navbar-collapse collapse">
              <ul class='nav navbar-nav navbar-right'>
                  <li><a [routerLink]="['/welcome']" style="color:white;">Home</a></li>
                  <li><a [routerLink]="['/narutolist']"  style="color:white;">Books</a></li>
              </ul>  
              </div>            
             
          </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
      </div>
    
  `,
  styleUrls: ['./shared/welcome.component.css'],
  providers: [NarutoServices]
  
})
export class AppComponent {
  title:string="Books & Beyond";
  
}
