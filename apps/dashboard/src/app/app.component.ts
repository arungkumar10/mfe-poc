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
    { firstName: 'Steve', lastName: 'Jobs', occupation: 'Business', companyName: 'Steve Copper.' },
    { firstName: 'Tidias', lastName: 'Teck', occupation: 'Manager', companyName: 'Tidias Enterprise.' },
    { firstName: 'Stadon', lastName: 'Jack', occupation: 'Leader', companyName: 'Stadon Ltd' }
  ];
  public seriesData: number[] = [20, 40, 45, 30, 50];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
}
