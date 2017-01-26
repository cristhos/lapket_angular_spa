import { Component,ViewEncapsulation, OnInit, AfterViewInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { UserService } from './user/service/user.service';
import './rxjs-operators';
import	{Observable}	from	'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: `
             <nav-bar [user]="user"></nav-bar>
             <main>
                <router-outlet ></router-outlet>
             </main>
             <core-footer  [user]="user" ></core-footer>
  `,
  styles : [require('./app.component.css')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
   user ;
   timerSub ;
    public constructor(private titleService: Title, private userService : UserService ) {}

    ngAfterViewInit(){
      this.setTitle("Acceuil");
      this.getInitialUser();
    }

    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }

    public getInitialUser(){
      if(localStorage.getItem("authent") == "O")
      {
        this.userService.getUserSession().subscribe(
            data =>{
              this.user = data;
              localStorage.setItem('user_id',this.user.id);
              this.subscribeToData();
              this.setTitle("Acceuil | "+this.user.username);
            },
            error => {
                console.log(error);
                localStorage.clear();
                localStorage.setItem("authent" , "N");
            },
            () => console.log("finish")
        );
      }else{
        localStorage.clear();
        localStorage.setItem("authent" , "N");
      }
  }

  private subscribeToData(): void {
      if(localStorage.getItem("authent") == "O")
      {
          this.timerSub = Observable.timer(10000).first().subscribe(
            () => {
              this.getInitialUser();
            }
          );

      }
  }
}
