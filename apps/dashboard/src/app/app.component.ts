import { Component } from '@angular/core';

@Component({
  selector: 'ng-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  columns:any = [
    {title: "First Name", dataProperty: "firstName", sortable: true, filterable: false},
    {title: "Last Name", dataProperty: "lastName", sortable: true, filterable: true},
    {title: "Occupation", dataProperty: "occupation", sortable: false, filterable: false},
    {title: "Company Name", dataProperty: "companyName", sortable: false, filterable: true},
  ];
  rows:any = [
    { firstName: 'John', lastName: 'Joseph', occupation: 'Teacher', companyName: 'Abc Inc.' },
    { firstName: 'John', lastName: 'Joseph', occupation: 'Teacher', companyName: 'Abc Inc.' },
    { firstName: 'John', lastName: 'Joseph', occupation: 'Teacher', companyName: 'Abc Inc.' },
    { firstName: 'John', lastName: 'Joseph', occupation: 'Teacher', companyName: 'Abc Inc.' }
  ];
}
