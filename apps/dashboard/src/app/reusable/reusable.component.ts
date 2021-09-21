import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss']
})
export class ReusableComponent implements OnInit {
  dataProperty: any = [];

  @Input() 
      columns:any = [];
  @Input()
      rows:any = [];
      
  constructor() { }

  ngOnInit(): void {
    this.columns.filter((res:any)=>{
      this.dataProperty.push(res.dataProperty);
    });
    console.log(this.dataProperty);
  }

}
