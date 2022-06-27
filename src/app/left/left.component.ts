import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Address {
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const addresses = [
  {
    address: '123 Fake Street, Apt. 2',
    city: 'Phoneyville',
    state: 'Noknowns',
    zip: '12345',
    country: 'Some Country'
  },
  {
    address: '404 Not Found',
    city: 'Unknown',
    state: 'Unknown',
    zip: '404',
    country: 'Unknown'
  }
];

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  @Output() open: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['address', 'city', 'state', 'zip', 'country'];
  dataSource = addresses;

  constructor() { }

  ngOnInit(): void {
  }

  onOpen(): void {
    this.open.emit();
  }

  keys(address: Address): string[] {
    return Object.keys(address);
  }
}
