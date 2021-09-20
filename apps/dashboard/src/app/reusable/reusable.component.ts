import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss']
})
export class ReusableComponent implements OnInit {
tableConfig: any = {
    columns: [
      {title: "First Name", dataProperty: "firstName", sortable: true, filterable: false},
      {title: "Last Name", dataProperty: "lastName", sortable: true, filterable: true},
      {title: "Occupation", dataProperty: "occupation", sortable: false, filterable: false},
      {title: "Company Name", dataProperty: "companyName", sortable: false, filterable: true},
    ],
    rowData:[
      { firstName: 'John', lastName: 'Joseph', occupation: 'Teacher', companyName: 'Abc Inc.' }
      // 'John','Joseph',  'Teacher','Abc Inc.'
    ],
    rowsPerPage: 20,
  }
  dataProperty: any = [];

  @Input() 
      columns:any = [];
  @Input()
      rows:any = [];
      
  
  

  constructor() { }

  ngOnInit(): void {
    // this.tableConfig.columns.filter((res:any)=>{
    //         this.dataProperty.push(res.dataProperty);
    // });
    // console.log(this.dataProperty);

    this.columns.filter((res:any)=>{
      this.dataProperty.push(res.dataProperty);
    });
    console.log(this.dataProperty);
  }

}
