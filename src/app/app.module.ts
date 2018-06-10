import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { StudentsList } from './books/naruto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoadingSpinnerComponent } from './app/loading-spinner/loading-spinner.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { RecaptchaModule,RECAPTCHA_SETTINGS,RecaptchaSettings  } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';


const routes: Routes = [
  {path:'narutolist', component: StudentsList},
      {path:'welcome', component: WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
 ];
@NgModule({
  declarations: [
    AppComponent,
    StudentsList,
    WelcomeComponent,
    LoadingSpinnerComponent,
    StudentdetailsComponent,
  ],
  
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy},
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { 
        siteKey: '6LeMp0sUAAAAAGXbZ6jgm-t4-cDWsjeOpNxQXDY_',
      } as RecaptchaSettings,
    },],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
 