import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Task {
  name: string;
  due: Date;
  icon: string;
}

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  tasks: Task[] = [
    {
      name: 'Feed the Gremlin',
      due: new Date('1/1/16'),
      icon: 'dinner_dining'
    },
    {
      name: 'Make coffee',
      due: new Date('1/1/16'),
      icon: 'coffee_maker'
    },
    {
      name: 'Login into work',
      due: new Date('1/1/16'),
      icon: 'devices'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
