import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string 
  people: ICustomer[];
  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.title = "Customers";
    this.isVisible = true;
    this.people = [
      {
        id: 1, name: 'Ion Egizu', city: 'Elizondo', orderTotal: 9.99, customerSince: new Date(2014 ,7, 10)
      },
      {
        id: 2, name: 'Ane Doe', city: 'Pamplonna/Iruña', orderTotal: 19.99, customerSince: new Date(2017 ,2, 22)
      },
      {
        id: 1, name: 'Juan SinTierra', city: 'Tudela', orderTotal: 99.99, customerSince: new Date(2013 ,10, 13)
      },
      {
        id: 1, name: 'Julia Thomas', city: 'Tafalla', orderTotal: 599.99, customerSince: new Date(2012 ,10, 31)
      }
    ];
  }

  changeVisibility(){
    if(this.isVisible){
      this.isVisible = false
    }else{
      this.isVisible = true
    }
  }

}
