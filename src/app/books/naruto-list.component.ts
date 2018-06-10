import {Component, OnInit} from "@angular/core";
import { IStudents } from "./students";
import { NarutoServices } from "./naruto.services";
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import {
    debounceTime, distinctUntilChanged, switchMap
  } from 'rxjs/operators';


@Component({
    templateUrl:'../app.component.html',
    styleUrls:['./makeit.component.css']
})


export class StudentsList implements OnInit{
    listTitle:string ="Books Shelf ";
    students: IStudents[];
    id:number;
    name:string;
    genre:string;
    author:string;
    price:number;
    errorMessage:string;
    student=new IStudents();
    narutoObj:object={};
    isAdded: boolean = false;
    showSpinner: boolean = true;
    recaptcha: string;
    bookAdded:string="Book has been added to our database";
    filterBooks:IStudents[];
    _listfilter:string;
    get listFilter():string{
        return this._listfilter;
    }
    set listFilter(value:string){
        this._listfilter=value;
        this.filterBooks=this.listFilter?this.performfilter(this.listFilter):this.students;
    }
    
    
    constructor(
        private http:Http,
        private _studentsservice: NarutoServices){
    }
    resolved(captchaResponse:string){
        console.log(`Resolved captcha with response ${captchaResponse}:`);
        this.recaptcha=captchaResponse;
        console.log(this.recaptcha);
    }
    sendData=function(naru){
        this.narutoObj={
            "name":naru.name,
            "genre":naru.genre,
            "price":naru.price,
            "author":naru.author,
            "recaptcha":naru.recaptcha
        }
        console.log(naru.name,naru.genre,naru.price,naru.author,naru.recaptcha)
        this.http.post("/api/books",this.narutoObj).subscribe((res:Response)=>{
            this.isAdded=true;
    })
}

    

    deleteProduct = function(id) {
        if(confirm("Are you sure?")) {
          const url = `${"/api/books"}/${id}`;
          return this.http.delete(url, {headers: this.headers}).toPromise()
            .then(() => {
                this.fetchData();
            })
        }
      }

    performfilter(filterBy:string):IStudents[]{
            filterBy=filterBy.toLocaleLowerCase();
            return this.students.filter((stud:IStudents)=>
                stud.name.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
    ngOnInit():void{
       this.fetchData();
    }
    fetchData(): void{
        this._studentsservice.getstudents()
        .subscribe(students=>{this.students=students,
        this.filterBooks=this.students},
            error=>this.errorMessage=<any>error,
            () => this.showSpinner = false,);
    }
     
}