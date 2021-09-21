import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@ng-mfe/shared/data-access-user';

@Component({
  selector: 'ng-mfe-login-entry',
  // template: `
  //   <div class="login-app">
  //     <form class="login-form" (ngSubmit)="login()">
  //       <label>
  //         Username:
  //         <input type="text" name="username" [(ngModel)]="username" />
  //       </label>
  //       <label>
  //         Password:
  //         <input type="password" name="password" [(ngModel)]="password" />
  //       </label>
  //       <button type="submit">Login</button>
  //     </form>
  //     <div *ngIf="isLoggedIn$">User is logged in!</div>
  //   </div>
  // `,
  templateUrl: './entry.component.html',
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  username = '';
  password = '';

  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router:Router) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
    // this.router.navigate(['http://localhost:4200/']);
    let loggedin:any;
    console.log(this.isLoggedIn$.subscribe((res:any)=>{ loggedin = res; console.log(res);}));
    if(loggedin){
          window.open('http://localhost:4200/','_self');
    }
  }
}